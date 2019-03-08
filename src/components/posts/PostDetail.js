import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const PostDetail = ({ postDetail, comments }) => {

  const postComments = comments.map((comment, i) => {
    return (<li key={i}> {comment.body} </li>);
  });
 
  if(!postDetail) {
    return <Redirect to={ROUTES.HOME.linkTo()} />;
  }
  const { id, userId, title, body } = postDetail;

  return (
    <>
    <div>
      <h1>Post</h1>
      <p>{id}</p>
      <p>{userId}</p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{postComments}</p>
    </div>
    </>
  );
};

PostDetail.propTypes = {
  postDetail: PropTypes.object.isRequired,
  comments: PropTypes.array
};

export default PostDetail;
