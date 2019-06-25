import React, { FC } from 'react';
import { MessageList } from './MessageList';
import { AddMessage } from './AddMessage';
import Header from '../components/Header';

const Chat: FC<{}> = () => (
  <>
    <Header />
    <MessageList />
    <AddMessage />
  </>
);

export default Chat;
