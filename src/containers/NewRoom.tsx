import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ApplicationState } from '../reducers/index';
import { Room } from '../domain/models';
import { RoomState, createRoom } from '../reducers/room';
import NewRoomComponent from '../components/NewRoom';
import { firebaseDB } from '../config/index';
import { createRandomToken } from '../util/token';

const roomsRef = firebaseDB.ref('rooms');

const mapStateToProps = (state: ApplicationState): RoomState => ({
  rooms: state.room.rooms,
});

export interface DispatchProps {
  dispatchCreateRoom: (room: Room) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchCreateRoom: (room: Room) => dispatch(createRoom(room)),
});

type NewRoomProps = RouteComponentProps & DispatchProps;
const NewRoomWithRouter = withRouter((props: NewRoomProps) => {
  const { dispatchCreateRoom } = props;
  const handleCreateRoom = (e: any) => {
    e.preventDefault();
    const id = createRandomToken();
    const name: string = e.currentTarget.children.roomName.value;
    const description: string = e.currentTarget.children.roomDescription.value;
    const room: Room = {
      id,
      name,
      description,
    };
    dispatchCreateRoom(room);
    roomsRef.push({
      id,
      name,
      description,
    });
    props.history.push(`/rooms`);
  };
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.history.push(`/rooms`);
  };

  return (
    <NewRoomComponent
      handleCreateRoom={handleCreateRoom}
      handleCancel={handleCancel}
    />
  );
});

export const NewRoom = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRoomWithRouter);
