import { Reducer } from 'redux';

export const CHANGE_AUTH_STATUS = 'USER/CHANGE_AUTH_STATUS';

export const changeAuthStatus = (user: firebase.User) => ({
  type: CHANGE_AUTH_STATUS as typeof CHANGE_AUTH_STATUS,
  user,
});

export type AuthAction = ReturnType<typeof changeAuthStatus>;
