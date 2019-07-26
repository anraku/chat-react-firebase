import { Reducer } from 'redux';
import { Room } from '../domain/models';

export const INITIAL_ROOMS = 'ROOM/INITIAL_ROOMS';
export const CREATE_ROOM = 'ROOM/CREATE_ROOMS';

export const initialRooms = (rooms: Room[]) => ({
  type: INITIAL_ROOMS as typeof INITIAL_ROOMS,
  rooms,
});

export const createRoom = (room: Room) => ({
  type: CREATE_ROOM as typeof CREATE_ROOM,
  room,
});

export interface RoomState {
  rooms: Room[];
}

export const initialState: RoomState = {
  rooms: [],
};

export type RoomAction =
  | ReturnType<typeof initialRooms>
  | ReturnType<typeof createRoom>;

const room: Reducer<RoomState, RoomAction> = (
  state: RoomState = initialState,
  action: RoomAction,
) => {
  switch (action.type) {
    case INITIAL_ROOMS:
      return {
        ...state,
        rooms: action.rooms,
      };
    case CREATE_ROOM:
      return {
        ...state,
        rooms: state.rooms.concat({
          id: action.room.id,
          name: action.room.name,
          description: action.room.description,
        }),
      };
    default:
      return state;
  }
};

export default room;
