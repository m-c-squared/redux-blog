import { getComments } from '../services/blogApiServices';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = postId => ({
  type: FETCH_COMMENTS,
  payload: getComments(postId)
});
