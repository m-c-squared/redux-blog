import React from 'react';
import PropTypes from 'prop-types';
const Comment = ({ comment }) => {
  return (
    <>
    <li>
      {comment}
    </li>
    </>
  );
};

Comment.propTypes = {
  comment : PropTypes.object.isRequired
};

export default Comment;
