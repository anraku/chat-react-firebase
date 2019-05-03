import { Reducer } from 'redux';
import { Message } from '../domain/models';

export const ADD_MESSAGE = 'CHAT/ADD_MESSAGE';
export const MESSAGE_RECEIVED = 'CHAT/MESSAGE_RECEIVED';

export const addMessage = (text: string, author: string) => ({
  type: ADD_MESSAGE as typeof ADD_MESSAGE,
  text,
  author,
});

export const messageReceived = (text: string, author: string) => ({
  type: MESSAGE_RECEIVED as typeof MESSAGE_RECEIVED,
  text,
  author,
});

export interface ChatState {
  messages: Message[];
}

export const initialState: ChatState = {
  messages: [],
};

export type ChatAction =
  | ReturnType<typeof addMessage>
  | ReturnType<typeof messageReceived>;

const message: Reducer<ChatState, ChatAction> = (
  state: ChatState = initialState,
  action: ChatAction,
) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return {
        ...state,
        messages: state.messages.concat({
          text: action.text,
          author: action.author,
        }),
      };
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const _: never = action;

      return state;
  }
};

export default message;
