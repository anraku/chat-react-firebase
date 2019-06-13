import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  bottom: 2%;
  left: 2%;
  right: 2%;
  position: absolute;
`;

interface AddMessageProps {
  userName: string | undefined;
  addMessage: (text: string, author: string) => void;
}

const AddMessageComponent: FC<AddMessageProps> = props => {
  let input: HTMLInputElement;

  return (
    <Wrapper >
      <div className="ui action fluid input">
        <input
          id="message-text"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              props.addMessage((props.userName? props.userName : '名無しさん'), input.value);
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
    </Wrapper>
  );
};

export default AddMessageComponent;
