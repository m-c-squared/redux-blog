import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const UserDetail = ({ userDetail }) => {
  if(!userDetail) {
    return <Redirect to={ROUTES.HOME.linkTo()} />
  }

  const { id, name, email, username } = userDetail;

  return (
    <>
    <div>
      <h1> USER </h1>
      <p> {id} </p>
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
