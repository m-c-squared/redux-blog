export const getUser = id => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json());
};

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
};

export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};

export const getPost = postId => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json());
};

export const getComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json());
};

export const getComment = commentId => {
  return fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    .then(res => res.json());
};
