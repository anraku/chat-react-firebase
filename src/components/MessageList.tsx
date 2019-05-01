import React, { FC } from 'react';

import MessageComponent from './Message';
import { Message } from '../domain/models';

export interface MessageListProps {
  messages: Message[];
}

const MessageListComponent: FC<MessageListProps> = props => {
  const { messages } = props;

  return (
    <>
      <ul>
        {messages.map(message => (
          <MessageComponent message={message} />
        ))}
      </ul>
    </>
  );
};

export default MessageListComponent;
