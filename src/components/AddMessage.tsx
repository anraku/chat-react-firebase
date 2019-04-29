import React, { FC } from 'react';

const AddMessageComponent: FC<{}> = () => {
  let input: HTMLInputElement;

  return (
    <div id="add-message" className="ui action fluid input">
      <input
        id="message-text"
        onKeyPress={e => {
          if (e.key === 'Enter') {
            input.value = '';
          }
        }}
        type="text"
        ref={(node: HTMLInputElement) => {
          input = node;
        }}
      />
      <div className="ui button">Search</div>
    </div>
  );
};

export default AddMessageComponent;
