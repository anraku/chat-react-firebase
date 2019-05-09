import { combineReducers, Reducer } from 'redux';
import auth, { AuthState } from './auth';
import message, { ChatState } from './message';

export interface ApplicationState {
  auth: AuthState;
  chat: ChatState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth,
  chat: message,
});

export default reducers;
