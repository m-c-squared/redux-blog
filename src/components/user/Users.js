import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Users = ({ users }) => {
    return (
      <ul>
        <User users={users}/>
    </ul>
    )
};

Users.propTypes =  {
  users: PropTypes.array.isRequired
}

export default Notes; 