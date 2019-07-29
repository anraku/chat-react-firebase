import React from 'react';
import styled from 'styled-components';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Room } from '../domain/models';

const RoomList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const RoomWrapper = styled.div`
  display: block;
  margin: 10px;
  height: 150px;
  border-style: solid;
  border-color: #eee;
  border-radius: 5px;
  background: #fff;
  color: #111;
  flex-basis: 100px;
`;

const Header = styled.div`
  width: 300px;
  padding: 10px;
`;

const Description = styled.div`
  width: 300px;
  padding: 10px;
  border-top: solid 1px #eee;
`;

const AddRoomButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 5%;
  background: #2185d0;
  color: #fff;
  width: 80px;
  height: 80px;
  line-height: -5px;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.4s;
  font-size: 40px;
  z-index: 1;

  &:hover {
    background: #1678c2;
  }
`;

type RoomListProps = RouteComponentProps & { rooms: Room[] };
const RoomListComponent = withRouter((props: RoomListProps) => {
  const { rooms } = props;
  const CreateNewRoom = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    props.history.push(`/rooms/new`);
  };

  return (
    <>
      <RoomList>
        {rooms.map((room, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <RoomComponent key={index} room={room} />
        ))}
      </RoomList>
      <AddRoomButton onClick={CreateNewRoom}>+</AddRoomButton>
    </>
  );
});

type RoomProps = RouteComponentProps & { room: Room };
const RoomComponent = withRouter((props: RoomProps) => {
  const { id, name, description } = props.room;
  const moveChat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    props.history.push(`/chat/${id}`);
  };

  return (
    <RoomWrapper onClick={moveChat}>
      <Header>{name}</Header>
      <Description>
        <p>{description}</p>
      </Description>
    </RoomWrapper>
  );
});

export default RoomListComponent;
