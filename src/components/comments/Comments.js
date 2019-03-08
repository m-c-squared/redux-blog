import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ comments }) => {

  const commentList = comments.map((({ body }) => {
    return <li key={body}> {body} </li>;
  }));

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
