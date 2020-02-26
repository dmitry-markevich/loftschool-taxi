import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './modules';
import { rootSaga } from './modules';

const initStore = () => {
  let initialState = {};

  initialState = sessionStorage.loftTaxi
    ? JSON.parse(sessionStorage.loftTaxi)
    : {};

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
