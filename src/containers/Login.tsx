import React, { FC, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AuthState, setUserName } from '../reducers/auth';
import { ApplicationState } from '../reducers/index';
import LoginComponent from '../components/Login';
import { Redirect } from 'react-router';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  userName: state.auth.userName,
});

export interface DispatchProps {
  handleLogin: (event: FormEvent<HTMLFormElement>) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleLogin: e => {
    e.preventDefault()
    const userName = (e.currentTarget.querySelector('#userName') as HTMLInputElement).value
    dispatch(setUserName(userName))
  },
});

const LoginContainer: FC<AuthState & DispatchProps> = ({
  userName,
  handleLogin,
}) => {
  return (
    userName? (
      <Redirect to={'/chat'} />
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
