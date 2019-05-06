import { connect } from 'react-redux';
import { ApplicationState } from '../reducers/index';
import { ChatState } from '../reducers/message';

import MessageListComponent from '../components/MessageList';

const mapStateToProps = (state: ApplicationState): ChatState => state.chat;

export const MessageList = connect(
  mapStateToProps,
  {},
)(MessageListComponent);
