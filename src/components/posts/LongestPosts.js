import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

export const HomePostContainer = styles.ul`
 @media (min-width: 374px) {
  display: grid:
  grid-template-columns: 33% 33% 33%; 
  padding: 0;
 }
`;

export const HomePosts = styles.li`
  @media (min-width: 374px) {
    list-style: none;
    font-family: 'Lato', san-serif;
    margin: 10px 5px 10px 5px;
    h3 {
      font-family: 'Roboto', san-serif;
      text-align: center;
      letter-spacing: .02em;
      text-decoration: underline;
      margin-top: 2em;
      color: rgb(93, 95, 96);
    }
    p {
      text-align: left;
      margin: 10px;
      font-size: 15px;
      color: rgb(93, 95, 96);
    }
  }
`;

const LongestPosts = ({ posts }) => {
  const longestPostList = posts
    .map((post, i) => {
      return (
        <HomePosts key={i}>
          <h3>Post length: {post.length} characters</h3>
          <p>{post}</p>
        </HomePosts>
      );
    });

  return (
    <HomePostContainer>
      {longestPostList}
    </HomePostContainer>
  );
};

LongestPosts.propTypes =  {
  posts: PropTypes.array.isRequired
};

export default LongestPosts;
