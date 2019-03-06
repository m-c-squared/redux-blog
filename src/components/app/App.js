import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header.js';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
    <>
    <Header />
      <h1>Redux Blog</h1>
      <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
    </>
    </Router>
    
  ); 
}
