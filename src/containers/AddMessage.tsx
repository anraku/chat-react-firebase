import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../reducers/message';
import { ApplicationState } from '../reducers/index';
import { AuthState } from "../reducers/auth";


const mapStateToProps = (state: ApplicationState): AuthState => ({
  userName: state.auth.userName,
});

interface DispatchProps {
  addMessage: (text: string, author: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addMessage: (text: string, author: string) =>
    dispatch(addMessage(text, author)),
});

export const AddMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMessageComponent);
