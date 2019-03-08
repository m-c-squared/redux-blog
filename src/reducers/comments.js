import { FETCH_COMMENT, FETCH_COMMENTS } from '../actions/comments';

const initialState = {
  comments: [],
  commentDetail: { postId: null, body: '' }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: payload
      };
    case FETCH_COMMENT:
      return {
        ...state,
        commentDetail: {
          postId: payload.postId,
          body: payload.body
        }
      };
    default:
      return state;
  }
}
