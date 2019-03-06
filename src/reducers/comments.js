const initialState = {
  postId: null,
  body: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_COMMENT':
      return {
        ...state,
        postId: payload.postId,
        body: payload.body
      };
    default:
      return state;
  }
}
