import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from 'styled-components';

const PostList = styles.ul`
@media (min-width: 374px) {
  display: grid:
  grid-template-columns: 33% 33% 33%; 
  padding: 10px; 
  }
`;



const Posts = ({ posts }) => {
  const postList = posts.map((post, i) => {
    return (
      <li key={i}>
        <Link key={post.id} to={ROUTES.POST_CONTAINER.linkTo(post.id)}>
          <h4> TITLE </h4>
          <p> {post.title}</p>
        </Link>
        <p>{post.body}</p>
      </li>
    );
  });

  return (
    <>
    <PostList>
      {postList}
    </PostList>
     </>
  );
};

Posts.propTypes =  {
  posts: PropTypes.array.isRequired
};

export default Posts;
