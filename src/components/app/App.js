import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header/Header.js';
import { ROUTES } from '../../routes/routes';
import AllUsers from '../../container/AllUsers';
import UserContainer from '../../container/UserContainer.js';


export default function App() {
  return (
    <Router>
    <>
    <Header />
      <h1>Redux Blog</h1>
      <AllUsers />
      <UserContainer />
      <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
      <Route exact component={ROUTES.USER_DETAIL.Component} path={ROUTES.USER_DETAIL.path} />
    </>
    </Router>
    
  ); 
}
