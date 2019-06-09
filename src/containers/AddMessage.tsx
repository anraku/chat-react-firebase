import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { firebaseDB } from '../config/index';

import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../reducers/message';
import { ApplicationState } from '../reducers/index';
import { AuthState } from "../reducers/auth";

const messagesRef = firebaseDB.ref('messages')

const mapStateToProps = (state: ApplicationState): AuthState => ({
  userName: state.auth.userName,
});

interface DispatchProps {
  addMessage: (message: string, author: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addMessage: (author: string, message: string) => {
    dispatch(addMessage(author, message))

    messagesRef.push({
      author,
      message,
    });
  }
});

export const AddMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMessageComponent);
