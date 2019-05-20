import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import firebase from '../config/index';

import { AuthState, changeAuthStatus } from '../reducers/auth';
import { ApplicationState } from '../reducers/index';
import LoginComponent from '../components/Login';
import { Redirect } from 'react-router';

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
      firebase.auth().signInWithPopup(provider);
    } else {
      dispatch(changeAuthStatus(firebase.auth().currentUser));
    }
  },
});

const LoginContainer: FC<AuthState & DispatchProps> = ({
  loginUser,
  // dispatchAuthStatus,
  handleLogin,
}) => {
  // firebase.auth().onAuthStateChanged(user => {
  //   dispatchAuthStatus(user);
  // });
  
  return (
    loginUser? (
      <Redirect to={'/auth'} />
    ) : (
      <LoginComponent
        handleLogin={handleLogin}
      />
    )
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
