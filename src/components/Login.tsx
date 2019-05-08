import React, { FC, useEffect } from 'react';
import firebase from '../config/index';

interface LoginProps {
  loginUser: firebase.UserInfo;
  login: () => void;
  logout: () => void;
  changeAuthStatus: (user: firebase.User) => void;
}

const LoginComponent: FC<LoginProps> = props => {
  const { login, logout, loginUser, changeAuthStatus } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        changeAuthStatus(user);
      }
    });
  }, []);

  return (
    <>
      <p>{loginUser.displayName}さんこんにちは</p>
      <button type="button" onClick={logout}>
        Google Logout
      </button>
      <button type="button" onClick={login}>
        Google Login
      </button>
    </>
  );
};

export default LoginComponent;
