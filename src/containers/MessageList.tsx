import { connect } from 'react-redux';
import { ApplicationState } from '../reducers/index';
import { ChatState } from '../reducers/message';

import MessageListComponent from '../components/MessageList';
import { AuthState } from '../reducers/auth';

type StateProps = ChatState & AuthState;

const mapStateToProps = (state: ApplicationState): StateProps => ({
  messages: state.chat.messages,
});

export const MessageList = connect(
  mapStateToProps,
  {},
)(MessageListComponent);
