import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header.js';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      < >
        <Header />
        <h1>Redux Blog</h1>
        <Switch>
          <Route exact path={ROUTES.ALL_USERS.path} component={ROUTES.ALL_USERS.Component} />
          <Route exact component={ROUTES.ALL_POSTS.Component} path={ROUTES.ALL_POSTS.path} />
          <Route exact component={ROUTES.ALL_COMMENTS.Component} path={ROUTES.ALL_COMMENTS.path} />
          <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
          <Route exact component={ROUTES.USER_CONTAINER.Component} path={ROUTES.USER_CONTAINER.path} />
          <Route exact component={ROUTES.POST_CONTAINER.Component} path={ROUTES.POST_CONTAINER.path} />
        </Switch>
      </>
    </Router>
  );
}
