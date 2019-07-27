import React, { FC } from 'react';
import styled from 'styled-components';
import TextField from '../kits/TextField';
import Label from '../kits/Label';
import { AgreeButton, CancelButton } from '../kits/Button';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

interface NewRoomProps {
  handleCreateRoom: (e: any) => void;
  handleCancel: (e: any) => void;
}

const NewRoom: FC<NewRoomProps> = props => {
  const { handleCreateRoom, handleCancel } = props;

  return (
    <>
      <h2>ルーム作成</h2>
      <Container>
        <form onSubmit={handleCreateRoom}>
          <Label value="ルーム名" />
          <TextField id="roomName" />
          <Label value="ルームの説明" />
          <TextField id="roomDescription" />
          <AgreeButton type="submit" value="ルームを作成する" />
          <CancelButton
            type="button"
            value="キャンセル"
            onClick={handleCancel}
          />
        </form>
      </Container>
    </>
  );
};

export default NewRoom;
