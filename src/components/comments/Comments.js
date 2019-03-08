import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';
import { HomePosts } from '../posts/LongestPosts';

const CommentsList = styles.ul`
@media (min-width: 374px) {
  display: grid:
  grid-template-columns: 33% 33% 33%; 
  padding: 0;
  }
`;

const CommentsHeader = styles.h3`
  text-align: left;
  font-family: 'Roboto', san-serif;
  margin: 2em .5em 2em .5em;
`;



const Comments = ({ comments }) => {

  const commentList = comments.map((({ body }) => {
    return (<CommentsHeader key={body}>Comment<HomePosts> {body} </HomePosts></CommentsHeader>) ;
  }));

  return (
    <>
    <CommentsList>  
      {commentList}
    </CommentsList>
     </>
  );
};

Comments.propTypes =  {
  comments: PropTypes.array.isRequired
};

export default Comments; 
