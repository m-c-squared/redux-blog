export const getAllComments = state => {
  return state.comments.comments;
};

export const getCommentById = state => {
  return state.comments.commentDetail;
};
