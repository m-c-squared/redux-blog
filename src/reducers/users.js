const initialState = {
  name: '',
  username: '',
  email: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_USER':
      return {
        ...state,
        name: payload.name,
        username: payload.username,
        email: payload.email
      };
    default:
      return state;
  }
}
