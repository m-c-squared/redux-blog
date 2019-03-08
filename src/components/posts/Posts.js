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

const PostItem = styles(Link)`
  @media (min-width: 374px) {
    font-family: 'Roboto', san-serif;
    color: rgb(93, 95, 96);
  }
`;


const PostDes = styles.p`
  @media (min-width: 374px) {
    font-family: 'Roboto', san-serif;
    color: rgb(93, 95, 96);
  }
`;

const Posts = ({ posts }) => {
  const postList = posts.map((post, i) => {
    return (
      <li key={i}>
        <PostItem key={post.id} to={ROUTES.POST_CONTAINER.linkTo(post.id)}>
          <p>{post.title}</p>
        </PostItem>
        <PostDes>{post.body}</PostDes>
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
