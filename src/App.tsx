import React from 'react';
import { AddMessage } from './containers/AddMessage';
import { MessageList } from './containers/MessageList';

const App: React.FC = () => {
  return (
    <>
      <MessageList />
      <AddMessage />
    </>
  );
};

export default App;
