import React, { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../reducers/index';
import { AuthState } from '../reducers/auth';
import Header from '../components/Header';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

interface DispatchProps {
  handleLogout: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleLogout: () => {}, // TODO: ログアウト処理を書く
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
