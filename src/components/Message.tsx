import { List, Image } from 'semantic-ui-react';

import React, { FC } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Message } from '../domain/models';

const TextWrapper = styled.div`
  display: inline-block;
  padding-left: 10px;
`;

const GuestIconWrapper = styled.div`
  display: inline-block;
  width: 28px;
`;

interface MessageProps {
  message: Message;
}

const MessageComponent: FC<MessageProps> = props => {
  const { message } = props;

  return (
    <List.Item>
      {message.photoURL !== '' ? (
        <Image avatar src={message.photoURL} />
      ) : (
        <GuestIconWrapper>
          <FontAwesome name="user" size="2x" />
        </GuestIconWrapper>
      )}
      <TextWrapper>
        <List.Content>
          <List.Header as="a">{message.author}</List.Header>
          <List.Description>{message.message}</List.Description>
        </List.Content>
      </TextWrapper>
    </List.Item>
  );
};

export default MessageComponent;
