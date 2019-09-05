import React, { FC } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from './reducers/index';
import { AuthState } from './reducers/auth';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

type State = AuthState & RouteProps;

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
  () => {},
)(PrivateRouteComponent);
export default PrivateRoute;
