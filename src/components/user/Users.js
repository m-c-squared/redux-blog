import React from 'react';
import PropTypes from 'prop-types';
// import User from './User';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from 'styled-components';

const UserLink = styles.ul`
@media (min-width: 374px) {
  display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 30px;
    grid-column-gap: 10px;
    padding: 30px 10px 30px 10px;
}
`;  

const UserList = styles(Link)`
  font-family: 'Roboto', san serif;
  color: rgb(93, 95, 96);
  overflow-wrap: word-break;
`;

const UserTitle = styles.h1`
  margin-top: 1.5em;
  color: rgb(93, 95, 96);
  font-family: 'Roboto', san serif;
`;

const Users = ({ users }) => {
  const userList = users.map(({ id, name }) => 
    <UserList key={id} to={ROUTES.USER_CONTAINER.linkTo(id)}> {name} </UserList>);
  return (
    <>
    <UserTitle> OUR CLIENTS </UserTitle>
    <UserLink>
      {userList}
    </UserLink>
     </>
  );
};

Users.propTypes =  {
  users: PropTypes.array.isRequired
};

export default Users; 
