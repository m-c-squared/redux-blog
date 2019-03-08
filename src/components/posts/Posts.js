import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Posts = ({ posts }) => {
  const postList = posts.map((post, i) => {
    return (
      <li key={i}>
        <Link key={post.id} to={ROUTES.POST_CONTAINER.linkTo(post.id)}>
          <p>{post.title}</p>
        </Link>
        <p>{post.body}</p>
      </li>
    );
  });

  return (
    <>
    <ul>
      {postList}
    </ul>
     </>
  );
};

Posts.propTypes =  {
  posts: PropTypes.array.isRequired
};

export default Posts;
