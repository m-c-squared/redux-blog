import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Users = ({ users }) => {
  const userList = users.map(user(({ id, name }) => {
    <Link key={id} to={ROUTES.USER_DETAIL.linkTo(id)}> {name} </Link>
    return (
      <div>
        {userList}
      </div>
    )
  })
  );
};

Users.propTypes =  {
  users: PropTypes.array.isRequired
}

export default Notes; 