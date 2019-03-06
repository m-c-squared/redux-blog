import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const UserDetail = ({ user }) => {
  if(!user) {
    return <Redirect to={ROUTES.HOME.linkTo()} />
  }

  const { name, email, username } = user;

  return (
    <>
    <div>
      <p> {name} </p>
      <p> {email} </p>
      <p> {username} </p>
    </div>
    </>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserDetail;
