import { List, Image } from 'semantic-ui-react';

import React, { FC } from 'react';
import { Message } from '../domain/models';

interface MessageProps {
  message: Message;
}

const MessageComponent: FC<MessageProps> = props => {
  const { message } = props;

  return (
    <List.Item>
      <Image avatar src={message.photoURL} />
      <List.Content>
        <List.Header as="a">{message.author}</List.Header>
        <List.Description>{message.message}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default MessageComponent;
