import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactsState } from "../../types/message";

// // Define initial state
const contactInit: ContactsState = {
  contacts: [],
  isLoading: false,
  selectedContact: null, 
};

export const contactReducer = createSlice({
  name: "contactReducer",
  initialState: contactInit,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    addContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts.push(...action.payload);
    },
    updateLastMessage: (
      state,
      action: PayloadAction<{ phone: string; lastmessage: string }>
    ) => {
      const { phone, lastmessage } = action.payload;
      const contact = state.contacts.find((c:Contact) => c.phonenumber === phone);
      if (contact) {
        contact.lastmessage = lastmessage;
      }
    },
    setSelectedContact: (state, action: PayloadAction<Contact | null>) => {
      state.selectedContact = action.payload;
    },
  },
});

export const { addContact,addContacts, updateLastMessage, setSelectedContact } = contactReducer.actions;
