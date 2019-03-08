import { FETCH_USER, FETCH_USERS } from '../actions/users';
import { RESET } from '../actions/common';

const initialState = {
  users: [],
  userDetail: { id: null, name: '', username: '', email: '' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      };
    case FETCH_USER:
      return {
        ...state,
        userDetail: {
          id: payload.id,
          name: payload.name,
          username: payload.username,
          email: payload.email
        }
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
}
