import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Posts = ({ posts }) => {
  // const postList = posts.map(({ id, title }) => 
  //   <Link key={id} to={ROUTES.POSTS_CONTAINER.linkTo(id)}> {title} </Link>);

  const postList = posts.map(({ id, title }) => {
    return <li key={id}> {title} </li>;
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
