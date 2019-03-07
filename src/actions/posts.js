import { getPosts, getPost } from '../services/blogApiServices';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: getPosts()
});

export const FETCH_POST = 'FETCH_POST';
export const fetchPost = id => ({
  type: FETCH_POSTS,
  payload: getPost(id)
});
