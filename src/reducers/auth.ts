import { Reducer } from 'redux';
import firebase from '../config/index';
import { User } from '../domain/models';

export const CHANGE_AUTH_STATUS = 'AUTH/CHANGE_AUTH_STATUS';
export const USER_LOGIN = 'AUTH/USER_LOGIN';

export const changeAuthStatus = (user: firebase.User | User | null) => ({
  type: CHANGE_AUTH_STATUS as typeof CHANGE_AUTH_STATUS,
  user,
});

// OAuthに切り替えたので使わない
export const setUserName = (userName: string) => ({
  type: USER_LOGIN as typeof USER_LOGIN,
  userName,
});

export type AuthAction =
  | ReturnType<typeof changeAuthStatus>
  | ReturnType<typeof setUserName>;

export interface AuthState {
  loginUser: firebase.User | User | null;
  userName?: string;
}

const initialState: AuthState = {
  loginUser: firebase.auth().currentUser,
  userName: '',
};

const auth: Reducer<AuthState, AuthAction> = (
  state: AuthState = initialState,
  action: AuthAction,
) => {
  switch (action.type) {
    case CHANGE_AUTH_STATUS:
      return {
        ...state,
        loginUser: action.user,
      };
    case USER_LOGIN: // OAuthに切り替えたので使わない
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export default auth;
