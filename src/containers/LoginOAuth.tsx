import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';
import firebase from '../config/index';

import { AuthState, changeAuthStatus } from '../reducers/auth';
import { ApplicationState } from '../reducers/index';
import LoginComponent from '../components/LoginOAuth';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

export interface DispatchProps {
  dispatchAuthStatus: (user: firebase.User | null) => void;
  handleLogin: () => void;
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
});

const LoginContainer: FC<AuthState & DispatchProps> = ({
  loginUser,
  dispatchAuthStatus,
  handleLogin,
}) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      dispatchAuthStatus(user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loginUser ? (
    <Redirect to="/chat" />
  ) : (
    <LoginComponent handleLogin={handleLogin} />
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
