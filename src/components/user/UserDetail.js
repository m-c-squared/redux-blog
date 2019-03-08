import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const UserDetail = ({ userDetail, posts }) => {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>{post.body}</li>
    );
  });

  if(!userDetail) {
    return <Redirect to={ROUTES.HOME.linkTo()} />;
  }

  const { id, name, email, username } = userDetail;

  return (
    <>
    <div>
      <h1>USER</h1>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{username}</p>
      <p>{listOfPosts}</p>
    </div>
    </>
  );
};

UserDetail.propTypes = {
  userDetail: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

export default UserDetail;
