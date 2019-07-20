import React, { FC } from 'react';
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
  handleGoogleLogin: () => void;
  handleTwitterLogin: () => void;
  handleGuestLogin: (e: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchAuthStatus: (user: firebase.User | null) =>
    dispatch(changeAuthStatus(user)),
  handleGoogleLogin: () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    } else {
      dispatch(changeAuthStatus(user));
    }
  },
  handleTwitterLogin: () => {
    const user = firebase.auth().currentUser;
    if (!user) {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    } else {
      dispatch(changeAuthStatus(user));
    }
  },
  handleGuestLogin: e => {
    e.preventDefault();
    const loginName = e.currentTarget.children.loginName.value;
    const user: User = { displayName: loginName, photoURL: '' };
    dispatch(changeAuthStatus(user));
  },
});

const LoginContainer: FC<AuthState & DispatchProps> = ({
  loginUser,
  dispatchAuthStatus,
  handleGoogleLogin,
  handleTwitterLogin,
  handleGuestLogin,
}) => {
  firebaseAuth.onAuthStateChanged(user => {
    if (user !== null) {
      dispatchAuthStatus(user);
    }
  });

  return loginUser ? (
    <Redirect to="/rooms" />
  ) : (
    <LoginComponent
      handleGoogleLogin={handleGoogleLogin}
      handleTwitterLogin={handleTwitterLogin}
      handleGuestLogin={handleGuestLogin}
    />
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
