import React from 'react';
import { withRouter } from 'react-router-dom';
import RoomListComponent from '../components/RoomList';

const RoomList = withRouter(props => {
  const moveChat = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    props.history.push('/chat');
  };

  return <RoomListComponent handleLink={moveChat} />;
});

export default RoomList;
