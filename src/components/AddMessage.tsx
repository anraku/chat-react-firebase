import React, { FC } from 'react';
import './AddMessage.css';

interface AddMessageProps {
  addMessage: (text: string, author: string) => void;
}

const AddMessageComponent: FC<AddMessageProps> = props => {
  let input: HTMLInputElement;

  return (
    <div id="add-message" className="ui action fluid input">
      <input
        id="message-text"
        onKeyPress={e => {
          if (e.key === 'Enter') {
            props.addMessage(input.value, 'Me');
            input.value = '';
          }
        }}
        type="text"
        ref={(node: HTMLInputElement) => {
          input = node;
        }}
      />
      <div className="ui button">送信</div>
    </div>
  );
};

export default AddMessageComponent;
