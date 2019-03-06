const initialState = {
  userId: null,
  title: '',
  body: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_POST':
      return {
        ...state,
        userId: payload.userId,
        title: payload.title,
        body: payload.body
      };
    default:
      return state;
  }
}
