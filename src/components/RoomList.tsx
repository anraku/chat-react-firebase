import React from 'react';
import styled from 'styled-components';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Room } from '../domain/models';

const RoomList = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  padding-right: 1%;

  div {
    /* モバイルファースト */
    margin-top: 1%;
    margin-left: 1%;
    flex-basis: 100%;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      flex-basis: 49%;
    }

    @media screen and (min-width: 1024px) {
      flex-basis: 24%;
    }
  }
`;

const RoomWrapper = styled.div`
  display: block;
  height: 150px;
  border-style: solid;
  border-color: #eee;
  border-width: 2px;
  border-radius: 0.3rem;
  background: #fff;
  color: #111;
`;

const Header = styled.div`
  padding: 10px;
`;

const Description = styled.div`
  padding: 10px;
  border-top: solid 1px #eee;
`;

const AddRoomButton = styled.button`
  position: fixed;
  right: 5%;
  bottom: 5%;
  background: #2185d0;
  color: #fff;
  line-height: 0.15;
  border-radius: 50%;
  overflow: hidden;
  font-size: 30px;
  z-index: 1;
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 40px;
  }

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
