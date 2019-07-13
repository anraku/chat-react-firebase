import { combineReducers, Reducer } from 'redux';
import auth, { AuthState } from './auth';
import message, { ChatState } from './message';
import room, { RoomState } from './room';

export interface ApplicationState {
  auth: AuthState;
  chat: ChatState;
  room: RoomState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth,
  chat: message,
  room,
});

export default reducers;
