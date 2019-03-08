import React from 'react';
import PropTypes from 'prop-types';

const LongestPosts = ({ posts }) => {
  const longestPostList = posts
    .map((post, i) => {
      return (
        <li key={i}>
          <h3>Post length: {post.length} characters</h3>
          <p>{post}</p>
        </li>
      );
    });

  return (
    <>
    <ul>
      {longestPostList}
    </ul>
     </>
  );
};

LongestPosts.propTypes =  {
  posts: PropTypes.array.isRequired
};

export default LongestPosts;
