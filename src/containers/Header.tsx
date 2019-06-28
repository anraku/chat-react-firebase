import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../reducers/index';
import { AuthState, changeAuthStatus } from '../reducers/auth';
import Header from '../components/Header';
import { firebaseAuth } from '../config/index';

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

interface DispatchProps {
  handleLogout: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  handleLogout: () => {
    firebaseAuth.signOut();
    dispatch(changeAuthStatus(null));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
