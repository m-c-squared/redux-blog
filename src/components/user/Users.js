import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


export const style = {
  fadeInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  }
};

export const right = {
  fadeInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  }
};

const UserLink = styles.ul`
@media (min-width: 374px) {
  display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 30px;
    grid-column-gap: 10px;
    padding: 30px 10px 30px 10px;
}
@media (min-width: 700px) {
  display: grid;
  grid-template-columns: 33% 33% 33%;
    padding: 30px 10px 30px 10px;
}
`;  

const UserList = styles(Link)`
@media (min-width: 374px) {
  font-family: 'Roboto', san serif;
  color: rgb(93, 95, 96);
  overflow-wrap: word-break;
}
@media (min-width: 374px) {
  font-size: 30px;
  padding: 10px;
  text-align: center;
}
`;

const UserTitle = styles.h1`
@media (min-width: 374px) {
  margin-top: 1.5em;
  color: rgb(93, 95, 96);
  font-family: 'Roboto', san serif;
}
`;
const UserImage = styles.img`
@media (min-width: 374px) and (max-width: 600px) {
  img {
    display: none;
    }
    p {
    display: none;
    }
  }
  width: 100%;
  height: 40vh;
  display: block;
  margin-right:auto;
  margin-left: auto;
`;

const ImageList = styles.ul`
@media (min-width: 374px) and (max-width: 600px) {
  ul {
    display: none;
    list-style: none;
    padding: 0;
    }
  }
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0;
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
    <StyleRoot>
      <UserTitle> OUR CLIENTS </UserTitle>
      <ImageList>
        <div style={style.fadeInLeft}>
          <UserImage src="/assets/rawpixel-411170-unsplash.jpg"></UserImage>
        </div>
        <div style={right.fadeInRight}>
          <UserImage style={right.fadeInRight} src="/assets/rawpixel-983649-unsplash.jpg"></UserImage>
        </div>
      </ImageList>
      <UserLink>
        {userList}
      </UserLink>
    </StyleRoot>
};

Users.propTypes =  {
  users: PropTypes.array.isRequired
};

export default Users; 
