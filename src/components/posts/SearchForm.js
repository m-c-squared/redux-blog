import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, handleChange, handleReset }) => {
  return (
    < >
      <label htmlFor="searchTerm">
        Search posts: <br/>
        <input name="searchTerm" value={searchTerm} onChange={handleChange}/>
      </label>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default SearchForm;
