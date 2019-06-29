import React, { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from './reducers/index';
import { AuthState, changeAuthStatus } from './reducers/auth';
import firebase from './config/index';
import { User } from './domain/models';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

export interface DispatchProps {
  dispatchAuthStatus: (user: firebase.User | User | null) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchAuthStatus: (user: firebase.User | User | null) =>
    dispatch(changeAuthStatus(user)),
});

type State = AuthState & DispatchProps & RouteProps;

const PrivateRouteComponent: FC<State> = ({
  loginUser,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        loginUser !== null ? (
          <Route component={Component} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRouteComponent);
export default PrivateRoute;
