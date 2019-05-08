import { Reducer } from 'redux';

export const ADD_USER = 'USER/ADD_USER';
export const USERS_LIST = 'USER/USERS_LIST';

export const addUser = (user: string) => ({
  type: ADD_USER as typeof ADD_USER,
  user,
});

export const usersList = (users: string[]) => ({
  type: USERS_LIST as typeof USERS_LIST,
  users,
});

interface RoomState {
  users: string[];
}

export const initialState: RoomState = {
  users: [],
};

export type RoomAction =
  | ReturnType<typeof addUser>
  | ReturnType<typeof usersList>;

const user: Reducer<RoomState, RoomAction> = (
  state: RoomState = initialState,
  action: RoomAction,
): RoomState => {
  switch (action.type) {
    case ADD_USER:
      state.users.concat([action.user]);

      return state;
    case USERS_LIST:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default user;
