import React, { FC } from 'react';
import { Message } from '../domain/models';

interface MessageProps {
  message: Message;
}

const MessageComponent: FC<MessageProps> = props => {
  const { message } = props;

  return (
    <>
      <span>
        {message.author}: {message.text}
      </span>
    </>
  );
};

export default MessageComponent;
