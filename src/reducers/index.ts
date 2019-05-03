import { combineReducers, Reducer } from 'redux';
import message, { ChatState } from './message';

export interface ApplicationState {
  chat: ChatState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  chat: message,
});

export default reducers;
