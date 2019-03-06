import { createStore, compose, applyMiddleware } from 'redux';
import { middleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  () => {},
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
