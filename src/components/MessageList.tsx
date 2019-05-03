import React, { FC } from 'react';
import { List } from 'semantic-ui-react';

import MessageComponent from './Message';
import { Message } from '../domain/models';

import './MessageList.css';

export interface MessageListProps {
  messages: Message[];
}

const MessageListComponent: FC<MessageListProps> = ({ messages = [] }) => {
  return (
    <div id="message-list">
      <List>
        {messages.map(message => (
          <MessageComponent message={message} />
        ))}
      </List>
    </div>
  );
};

export default MessageListComponent;
