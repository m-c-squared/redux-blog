const initialState = {
  posts: [],
  postDetail: { userId: null, title: '', body: '' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_POST':
      return {
        ...state,
        posts: payload
      };
    case 'FETCH_POST_DETAIL':
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
