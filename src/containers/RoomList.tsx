import React, { FC, ComponentClass } from 'react';
import { withRouter } from 'react-router-dom';
import RoomListComponent, { RoomListProps } from '../components/RoomList';

const RoomList = withRouter(props => {
  const moveChat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    console.log('test onclick from container'); // test code
    props.history.push('/chat');
  };

  return <RoomListComponent handleLink={moveChat} />;
});

export default RoomList;
