import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';


export default function Header() { 
  return (
    <header>
      <nav>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
        <Link to={ROUTES.ALL_USERS.linkTo()}>All Users</Link>
        <Link to={ROUTES.USER_CONTAINER.linkTo()}>User Detail</Link>
      </nav>
    </header>
  );

}

