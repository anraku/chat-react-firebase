import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import firebase, { firebaseAuth } from '../config/index';

import { AuthState, changeAuthStatus } from '../reducers/auth';
import { ApplicationState } from '../reducers/index';
import LoginComponent from '../components/LoginOAuth';
import { User } from '../domain/models';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

export interface DispatchProps {
  dispatchAuthStatus: (user: firebase.User | null) => void;
  handleLogin: () => void;
  handleGuestLogin: (e: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchAuthStatus: (user: firebase.User | null) =>
    dispatch(changeAuthStatus(user)),
  handleLogin: () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    } else {
      dispatch(changeAuthStatus(user));
    }
  },
  handleGuestLogin: e => {
    e.preventDefault();
    const loginName = e.currentTarget.children.loginName.value;
    const photoURL =
      'https://react.semantic-ui.com/images/avatar/small/rachel.png';
    const user: User = { displayName: loginName, photoURL };
    dispatch(changeAuthStatus(user));
  },
});

const LoginContainer: FC<AuthState & DispatchProps> = ({
  loginUser,
  dispatchAuthStatus,
  handleLogin,
  handleGuestLogin,
}) => {
  // useEffect(() => {
  //   firebaseAuth.onAuthStateChanged(user => {
  //     console.log('after mounted loginOAuth user is ', user);
  //     dispatchAuthStatus(user);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  firebaseAuth.onAuthStateChanged(user => {
    console.log('after mounted loginOAuth user is ', user);
    if (user !== null) {
      dispatchAuthStatus(user);
    }
  });
  console.log('before mount loginOAuth user is ', loginUser);

  return loginUser ? (
    <Redirect to="/chat" />
  ) : (
    <LoginComponent
      handleLogin={handleLogin}
      handleGuestLogin={handleGuestLogin}
    />
  );
};

// eslint-disable-next-line prettier/prettier
export const Login = connect(mapStateToProps,mapDispatchToProps)(LoginContainer);