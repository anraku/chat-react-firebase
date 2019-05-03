import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../reducers/message';

interface DispatchProps {
  addMessage: (text: string, author: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addMessage: (text: string, author: string) =>
    dispatch(addMessage(text, author)),
});

export const AddMessage = connect(
  () => ({}),
  mapDispatchToProps,
)(AddMessageComponent);
