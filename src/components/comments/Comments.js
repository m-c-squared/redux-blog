import React from 'react';
import PropTypes from 'prop-types';
// import User from './User';
// import { Link } from 'react-router-dom';
// import { ROUTES } from '../../routes/routes';

const Comments = ({ comments }) => {

  const commentList = comments.map(({ postId, body }) => {
    return <li key={postId}> {body} </li> ;
  });
  // const commentList = comments.map(({ postId, body }) => 
  //   <Link key={postId} to={ROUTES.USER_CONTAINER.linkTo(postId)}> { body } </Link>);
  return (
    <>
    <ul>
      {commentList}
    </ul>
     </>
  );
};

Comments.propTypes =  {
  comments: PropTypes.array.isRequired
};

export default Comments; 
