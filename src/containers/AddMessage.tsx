import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { firebaseDB } from '../config/index';

import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../reducers/message';
import { ApplicationState } from '../reducers/index';
import { AuthState } from '../reducers/auth';

const messagesRef = firebaseDB.ref('messages');

const mapStateToProps = (state: ApplicationState): AuthState => ({
  loginUser: state.auth.loginUser,
});

interface DispatchProps {
  addMessage: (author: string, photoURL: string, message: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addMessage: (author: string, photoURL: string, message: string) => {
    dispatch(addMessage(author, photoURL, message));

    messagesRef.push({
      author,
      photoURL,
      message,
    });
  },
});

export const AddMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMessageComponent);
