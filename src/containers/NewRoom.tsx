import { connect } from 'react-redux';
import { Dispatch } from 'redux';
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
  handleCreateRoom: (e: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dispatchCreateRoom: (room: Room) => dispatch(createRoom(room)),
  handleCreateRoom: e => {
    e.preventDefault();
    const id = createRandomToken();
    const name: string = e.currentTarget.children.roomName.value;
    const description: string = e.currentTarget.children.roomDescription.value;
    const room: Room = {
      id,
      name,
      description,
    };
    dispatch(createRoom(room));
    roomsRef.push({
      id,
      name,
      description,
    });
    window.location.href = '/rooms';
  },
});

export const NewRoom = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewRoomComponent);
