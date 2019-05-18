import React, { FC } from 'react';
import firebase from '../config/index';
import { Link } from 'react-router-dom';

interface AuthProps {
  loginUser?: firebase.User | null;
  handleLogin?: () => void;
  handleLogout?: () => void;
}

const AuthComponent: FC<AuthProps> = props => {
  const { loginUser, handleLogin, handleLogout } = props;

  return (
    <>
      {loginUser ? (
        <>
          <p>{loginUser.displayName}さんこんにちは</p>
          <button type="button" onClick={handleLogout}>
            Google Logout
          </button>
        </>
      ) : (
        <>
          <p>guestさんこんにちは</p>
          <button type="button" onClick={handleLogin}>
            Google Login
          </button>
        </>
      )}
      <Link to={"/login"}>login</Link>
    </>
  );
};

export default AuthComponent;
