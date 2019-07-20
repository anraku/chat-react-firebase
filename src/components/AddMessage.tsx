import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { User } from '../domain/models';

const Wrapper = styled.div`
  bottom: 2%;
  left: 2%;
  right: 2%;
  position: absolute;
`;

interface AddMessageProps {
  loginUser: firebase.User | User | null;
  addMessage: (
    roomID: string,
    text: string,
    photoURL: string,
    author: string,
  ) => void;
}

interface Params {
  roomID: string;
}
type Props = AddMessageProps & RouteComponentProps<Params>;
const AddMessageComponent = withRouter((props: Props) => {
  const { match, loginUser, addMessage } = props;
  const guestName = '名無しさん';
  let input: HTMLInputElement;

  return (
    <Wrapper>
      <div className="ui fluid input">
        <input
          id="message-text"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (loginUser) {
                addMessage(
                  match.params.roomID,
                  loginUser.displayName ? loginUser.displayName : guestName,
                  loginUser.photoURL ? loginUser.photoURL : '',
                  input.value,
                );
              } else {
                addMessage(match.params.roomID, guestName, '', input.value);
              }
              input.value = '';
            }
          }}
          type="text"
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
      </div>
    </Wrapper>
  );
});

export default AddMessageComponent;
