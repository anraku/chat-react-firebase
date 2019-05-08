import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import firebase from '../config/index';

import LoginComponent from '../components/Login';
import { changeAuthStatus } from '../reducers/auth';

interface StateProps {
  loginUser: firebase.UserInfo;
  login: () => void;
  logout: () => void;
}

const mapStateToProps = (state: any): StateProps => ({
  loginUser: state.loginUser,
  login: (): void => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  },
  logout: (): void => {
    firebase.auth().signOut();
  },
});

interface DispatchProps {
  changeAuthStatus: (user: firebase.User) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeAuthStatus: (user: firebase.User) => dispatch(changeAuthStatus(user)),
});

export type LoginProps = StateProps | Dispatch;
// const LoginContainer: FC<LoginProps> = ({ loginUser, login, logout }) => {
//   return <LoginComponent loginUser={loginUser} login={login} logout={logout} />;
// };

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
