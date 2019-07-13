import { Reducer } from 'redux';
import { Room } from '../domain/models';

export const INITIAL_ROOMS = 'CHAT/INITIAL_ROOMS';

export const initialRooms = (rooms: Room[]) => ({
  type: INITIAL_ROOMS as typeof INITIAL_ROOMS,
  rooms,
});

export interface RoomState {
  rooms: Room[];
}

export const initialState: RoomState = {
  rooms: [],
};

export type RoomAction = ReturnType<typeof initialRooms>;

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
    default:
      return state;
  }
};

export default room;
