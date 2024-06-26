import { Contact, Message } from "./message";

export interface UserResponse {}

export interface AuthUser {
  phone: string;
  password: string;
}

export interface SingupUser {
  phone: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface ForgotUser {
  email: string;
}

export interface ResetPasswordQuery {
  verifyToken: string;

  password: string;
}

export interface ResetPasswordResponse extends MessageResponse {
  token: string;
}

export interface MessageResponse {
  success?: boolean;
  message?: string;
}

export interface SendMessageResponse extends MessageResponse {
  data: Message;
}

export interface BotMessageResponse {
  data: Message;
  phonenumber: string;
}

export interface UpdateSettingRequest {
  phonenumber: string;
  setting: "auto" | "manual";
}

export interface User {
  _id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginResponse extends MessageResponse {
  data: {
    token: string;
    user: User;
  };
}

export interface ContactResponse extends MessageResponse {
  data: Contact[];
}

export interface MessageSendRequest {
  phonenumber: string;
  sender: string;
  text: string;
  type: "text";
  name: string;
}
export interface SendSheduleRequest {
  scheduletimestamp: string;
  text: string;
}

export interface InquiryData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

// export interface
