import { Reducer } from 'redux';
import { Message } from '../domain/models';

export const INITIAL_MESSAGE = 'CHAT/INITIAL_MESSAGE';
export const ADD_MESSAGE = 'CHAT/ADD_MESSAGE';
export const MESSAGE_RECEIVED = 'CHAT/MESSAGE_RECEIVED';

export const initialMessage = (messages: Message[]) => ({
  type: INITIAL_MESSAGE as typeof INITIAL_MESSAGE,
  messages,
});

export const addMessage = (
  roomID: string,
  author: string,
  photoURL: string,
  message: string,
) => ({
  type: ADD_MESSAGE as typeof ADD_MESSAGE,
  roomID,
  author,
  photoURL,
  message,
});

export const messageReceived = (
  roomID: string,
  author: string,
  photoURL: string,
  message: string,
) => ({
  type: MESSAGE_RECEIVED as typeof MESSAGE_RECEIVED,
  roomID,
  author,
  photoURL,
  message,
});

export interface ChatState {
  messages: Message[];
}

export const initialState: ChatState = {
  messages: [],
};

export type ChatAction =
  | ReturnType<typeof initialMessage>
  | ReturnType<typeof addMessage>
  | ReturnType<typeof messageReceived>;

const message: Reducer<ChatState, ChatAction> = (
  state: ChatState = initialState,
  action: ChatAction,
) => {
  switch (action.type) {
    case INITIAL_MESSAGE:
      return {
        ...state,
        messages: action.messages,
      };
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return {
        ...state,
        messages: state.messages.concat({
          roomID: action.roomID,
          author: action.author,
          photoURL: action.photoURL,
          message: action.message,
        }),
      };
    default:
      return state;
  }
};

export default message;
