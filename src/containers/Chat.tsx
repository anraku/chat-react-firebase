import React, { FC } from 'react';
import { MessageList } from './MessageList';
import { AddMessage } from './AddMessage';

const Chat: FC<{}> = () => (
  <>
    <MessageList />
    <AddMessage />
  </>
)

export default Chat;
