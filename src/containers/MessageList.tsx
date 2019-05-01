import { connect } from 'react-redux';
import MessageListComponent, {
  MessageListProps,
} from '../components/MessageList';
import { ChatState } from '../reducers/chat';
import { Message } from '../domain/models';

interface StateProps {
  messages: Message[];
}

const mapStateToProps = (state: ChatState): StateProps => ({
  messages: state.messages,
});

export const MessageListContainer = connect(
  mapStateToProps,
  {},
)(MessageListComponent);
