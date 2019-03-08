export const getAllPosts = state => { 
  return state.posts.posts;
};

export const getPostById = state => { 
  return state.posts.postDetail;
};

export const getLongestPosts = state => {
  return state.posts.posts
    .map(obj => obj.body)
    .sort((a, b) => b.length - a.length)
    .slice(0, 5);
};
