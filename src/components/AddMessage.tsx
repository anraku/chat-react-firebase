import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  bottom: 2%;
  left: 2%;
  right: 2%;
  position: absolute;
`;

interface AddMessageProps {
  loginUser: firebase.User | null;
  addMessage: (text: string, photoURL: string, author: string) => void;
}

const AddMessageComponent: FC<AddMessageProps> = props => {
  const { loginUser } = props;
  const guestName = '名無しさん';
  const guestPhotoURL =
    'https://react.semantic-ui.com/images/avatar/small/rachel.png';
  let input: HTMLInputElement;

  return (
    <Wrapper>
      <div className="ui action fluid input">
        <input
          id="message-text"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (loginUser) {
                props.addMessage(
                  loginUser.displayName ? loginUser.displayName : guestName,
                  loginUser.photoURL ? loginUser.photoURL : guestPhotoURL,
                  input.value,
                );
              } else {
                props.addMessage(guestName, guestPhotoURL, input.value);
              }
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
