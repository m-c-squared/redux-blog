import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { ROUTES }   from '../../routes/routes';

const Comments = ({ comments }) => {
  const commentList = comments.map(({ id }) => {
    return (<li key={id}>{id}</li>);
  });

  // const commentList = comments.map(({ commentId }) => 
  //   <Link key={ commentId} to={`/comments/${commentId}`}></Link>);
  return (
      <>
      <ul> 
        {commentList}
      </ul>
      </>
  );
};

Comments.propTypes = {
  comments: PropTypes.string.isRequired
};

export default Comments;
