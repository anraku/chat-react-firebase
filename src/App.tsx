import React from 'react';
import { AddMessage } from './containers/AddMessage';
import { MessageList } from './containers/MessageList';
import { Login } from './containers/Login';

const App: React.FC = () => {
  return (
    <>
      <Login />
      <MessageList />
      <AddMessage />
    </>
  );
};

export default App;
