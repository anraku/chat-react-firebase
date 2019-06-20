import React, { FC } from 'react';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

import MessageComponent from './Message';
import { Message } from '../domain/models';

const Wrapper = styled.div`
  padding-left: 2%;
  padding-top: 2%;
  height: 90vh;
  overflow-y: auto;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: lightgray;
`;

export interface MessageListProps {
  messages: Message[];
}

const MessageListComponent: FC<MessageListProps> = ({ messages = [] }) => {
  return (
    <Wrapper>
      <List>
        {messages.map((message, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <MessageComponent key={index} message={message} />
        ))}
      </List>
    </Wrapper>
  );
};

export default MessageListComponent;
