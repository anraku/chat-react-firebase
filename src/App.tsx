import React from 'react';

import AddMessageComponent from './components/AddMessage';
import MessageListComponent from './components/MessageList';

const App: React.FC = () => {
  return (
    <>
      <MessageListComponent messages={[{ text: 'hello', author: 'me' }]} />
      <AddMessageComponent />
    </>
  );
};

export default App;
