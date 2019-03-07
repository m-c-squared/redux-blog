import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header.js';
import { ROUTES } from '../../routes/routes';
import AllUsers from '../../container/AllUsers';


export default function App() {
  return (
    <Router>
    <>
    <Header />
      <h1>Redux Blog</h1>
      <AllUsers />
      <Route exact component={ROUTES.ALL_USERS.Component} path={ROUTES.ALL_USERS.path} />
      <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
      <Route exact component={ROUTES.USER_CONTAINER.Component} path={ROUTES.USER_CONTAINER.path} />
    </>
    </Router>
    
  ); 
}
