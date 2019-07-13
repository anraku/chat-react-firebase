import React, { FC, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import RoomListComponent from '../components/RoomList';
import { Room } from '../domain/models';
import { firebaseDB } from '../config/index';
import { ApplicationState } from '../reducers/index';
import { initialRooms, RoomState } from '../reducers/room';

const roomsRef = firebaseDB.ref('rooms');

const mapStateToProps = (state: ApplicationState): RoomState => ({
  rooms: state.room.rooms,
});

interface DispatchProps {
  initialDispatch: (rooms: Room[]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  initialDispatch: (rooms: Room[]) => {
    dispatch(initialRooms(rooms));
  },
});

type RoomListProps = RoomState & DispatchProps;
const RoomListContainer: FC<RoomListProps> = ({ rooms, initialDispatch }) => {
  useEffect(() => {
    let roomList: Room[] = [];
    roomsRef.once('value').then(snapshot => {
      if (snapshot) {
        roomList = Object.values(snapshot.val());
      }
      initialDispatch(roomList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RoomListComponent rooms={rooms} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomListContainer);
