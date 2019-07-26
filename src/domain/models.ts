export interface Message {
  roomID: string;
  author: string;
  photoURL: string;
  message: string;
}

export interface User {
  displayName: string;
  photoURL: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
}
