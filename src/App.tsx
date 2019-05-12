import React from 'react';
import { AddMessage } from './containers/AddMessage';
import { MessageList } from './containers/MessageList';
import { Auth } from './containers/Auth';

const App: React.FC = () => {
  return (
    <>
      <Auth />
      <MessageList />
      <AddMessage />
    </>
  );
};

export default App;
