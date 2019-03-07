import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const User = ({ users }) => {
  const userList = users.map(({ id, name }) => 
    <Link key={id} to={ROUTES.USER_DETAIL.linkTo(id)}> {name} </Link>);
  return (
    <li>
      {userList}
    </li>
  );
};

User.propTypes =  {
  users: PropTypes.array.isRequired
};
export default User;  
