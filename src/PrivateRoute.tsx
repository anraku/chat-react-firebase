import React, { FC, useEffect } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from './reducers/index';
import { AuthState, changeAuthStatus } from './reducers/auth';
import firebase, { firebaseAuth } from './config/index';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

export interface DispatchProps {
  dispatchAuthStatus: (user: firebase.User | null) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchAuthStatus: (user: firebase.User | null) =>
    dispatch(changeAuthStatus(user)),
});

type State = AuthState & DispatchProps & RouteProps;

const PrivateRouteComponent: FC<State> = ({
  loginUser,
  dispatchAuthStatus,
  component: Component,
  ...rest
}) => {
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log('privateroute login status: ', user);
  //     loginUser = user;
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // firebase.auth().onAuthStateChanged(user => {
  //   console.log('privateroute outside login status: ', user);
  //   loginUser = user;
  // });
  firebaseAuth.onAuthStateChanged(user => {
    console.log('after mounted privateroute login status: ', user);
    dispatchAuthStatus(user);
  });
  console.log('before mount privateroute component:', loginUser);
  const test = firebaseAuth.currentUser;
  console.log('privateroute current user = ', test);

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
