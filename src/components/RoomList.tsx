import React, { FC } from 'react';
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

export interface RoomListProps {
  rooms: Room[];
}

const RoomListComponent: FC<RoomListProps> = ({ rooms = [] }) => {
  return (
    <RoomList>
      {rooms.map((room, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <RoomComponent key={index} room={room} />
      ))}
    </RoomList>
  );
};

type RoomProps = RouteComponentProps & { room: Room };
const RoomComponent = withRouter((props: RoomProps) => {
  const { id, title, description } = props.room;
  const moveChat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    props.history.push(`/chat/${id}`);
  };

  return (
    <RoomWrapper onClick={moveChat}>
      <Header>{title}</Header>
      <Description>
        <p>{description}</p>
      </Description>
    </RoomWrapper>
  );
});

export default RoomListComponent;
