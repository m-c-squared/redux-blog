const initialState = {
  users: [],
  userDetail: { id: null, name: '', username: '', email: '' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_USER':
      return {
        ...state,
        users: payload
      };
    case 'FETCH_USER_DETAIL':
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        username: payload.username,
        email: payload.email
      };
    default:
      return state;
  }
}
