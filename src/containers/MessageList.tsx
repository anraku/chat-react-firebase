import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { firebaseDB } from '../config/index';
import { ApplicationState } from '../reducers/index';
import { ChatState, initialMessage } from '../reducers/message';
import { Message } from '../domain/models';
import MessageListComponent from '../components/MessageList';

const mapStateToProps = (state: ApplicationState): ChatState => ({
  messages: state.chat.messages,
});

interface DispatchProps {
  initialDispatch: (messages: Message[]) => void;
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  initialDispatch: (messages: Message[]) => {
    dispatch(initialMessage(messages));
  },
});

const messagesRef = firebaseDB.ref('messages');

type MessageListProps = ChatState & DispatchProps;
const MessageListContainer: FC<MessageListProps> = ({
  messages,
  initialDispatch,
}) => {
  useEffect(() => {
    messagesRef.once('value').then(snapshot => {
      let messageList: Message[] = [];
      if (snapshot) {
        messageList = messages.concat(Object.values(snapshot.val()));
      }
      initialDispatch(messageList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MessageListComponent messages={messages} />;
};

export const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListContainer);
