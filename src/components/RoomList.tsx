import React, { FC } from 'react';
import styled from 'styled-components';

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

export interface RoomProps {
  handleLink: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export type RoomListProps = RoomProps;

const RoomListComponent: FC<RoomListProps> = ({
  handleLink = () => {
    console.log('test onclick'); // test code
  },
}) => {
  return (
    <RoomList>
      <Room handleLink={handleLink} />
    </RoomList>
  );
};

const Room: FC<RoomProps> = ({
  handleLink = () => {
    console.log('test onclick'); // test code
  },
}) => {
  return (
    <RoomWrapper onClick={handleLink}>
      <Header>title</Header>
      <Description>
        <p>description</p>
      </Description>
    </RoomWrapper>
  );
};

export default RoomListComponent;
