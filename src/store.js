import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './modules';
import {
  signUserMiddleware,
  loadProfileMiddleware,
  updateProfileMiddleware
} from './modules/user';

const initialState = sessionStorage.loftTaxi
  ? JSON.parse(sessionStorage.loftTaxi)
  : {};

export default createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(signUserMiddleware),
    applyMiddleware(loadProfileMiddleware),
    applyMiddleware(updateProfileMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : noop => noop
  )
);
