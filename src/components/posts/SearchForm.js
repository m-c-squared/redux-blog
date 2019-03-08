import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const PostLabel = styles.label`
@media (min-width: 374px) {
  color: rgb(93, 95, 96);
  font-family: 'Roboto', san-serif;
  display: flex;
  justify-content: center;  
  margin-top: 1em;
  }
`;

const PostButton = styles.button`
@media (min-width: 374px) {
  font-family: 'Roboto', san-serif;
  color: rgb(93, 95, 96);
  margin-top: 1em;  
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  }
`;


const SearchForm = ({ searchTerm, handleChange, handleReset }) => {
  return (
    < >
      <PostLabel htmlFor="searchTerm">
        Search posts: <br/>
        <input name="searchTerm" value={searchTerm} onChange={handleChange}/>
      </PostLabel>
      <PostButton onClick={handleReset}>Reset</PostButton>
    </>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default SearchForm;
