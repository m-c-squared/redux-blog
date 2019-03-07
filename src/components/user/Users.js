import React from 'react';
import PropTypes from 'prop-types';
// import User from './User';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Users = ({ users }) => {
  const userList = users.map(({ id, name }) => 
    <Link key={id} to={ROUTES.USER_DETAIL.linkTo(id)}> {name} </Link>);
  return (
    <ul>
      {userList}
    </ul>
  );
};

Users.propTypes =  {
  users: PropTypes.array.isRequired
};

export default Users; 
