// const Auth = props => (props.currentUser.isLoggedIn ? props.children : <Redirect to={'/login'}/>)

import React, { FC } from 'react';
import firebase from '../config/index';
import { Link, Redirect } from 'react-router-dom';

interface AuthProps {
  loginUser?: firebase.User | null;
}

const Auth: FC<AuthProps> = props => {
  const { loginUser } = props;

  return (
    <>
      {loginUser ? (props.children) : (<Redirect to={'/login'}/>)}
    </>
  );
};

export default Auth;
