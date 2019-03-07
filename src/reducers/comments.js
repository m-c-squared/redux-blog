const initialState = {
  comments: [],
  commentDetail: { postId: null, body: '' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'FETCH_COMMENT':
      return {
        ...state,
        comments: payload
      };
    case 'FETCH_COMMENT_DETAIL':
      return {
        ...state,
        postId: payload.postId,
        body: payload.body
      };
    default:
      return state;
  }
}
