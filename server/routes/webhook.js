import Message from "../models/Message.js";
import Contact from "../models/Contact.js";
import { TryCatch } from "../middlewares/error.js";
import { genAIModel } from "../utils/chatAI.js";
import { bot } from "../whatsCloud.js";

const template = [
  {
    role: "user",
    parts: "what is your task ",
  },
  {
    role: "model",
    parts:
      "You are Hollywood Celebrity name Faijan. Your Task to answer message in WhatsApp. Send answer like a human being and don't mentioned that you are assistant .",
  },
];
export const handleMessage = TryCatch(async (msg) => {
  console.log(msg);
  const { from, name, data } = msg;
  const { text, type } = data;

  // Create or update the Contact document
  let contact = await Contact.findOne({ phonenumber: from });
  if (!contact) {
    contact = new Contact({ phonenumber: from, name });
    await contact.save();
  }

  // Find or create the Message document
  let message = await Message.findOne({ phonenumber: contact._id });

  // If the message document doesn't exist, create a new one
  if (!message) {
    message = new Message({
      phonenumber: contact._id,
      data: [{ sender: 'friend', type, text }],
    });
  } else {
    // If the message document exists, update it by pushing the new message data
    message.data.push({ sender: 'friend', type, text });
  }

  // Save the updated or new message document
  await message.save();
    // Send a response using the AI model
    
  let conversation = template;
  const chatSession = genAIModel.startChat({ history: conversation });
  const result = await chatSession.sendMessage(text);
  const messageResponse = result.response.text();

  if(contact.setting=="manual"){
    return
  }
  await bot.sendText(from, messageResponse);
  
    // Update the Message document with the model's response
  message.data.push({ sender: 'friend', text: messageResponse, type });
  await message.save();

 
});
