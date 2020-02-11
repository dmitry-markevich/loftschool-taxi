import { combineReducers } from 'redux';
import user from './user';
import map from './map';

import { fork } from 'redux-saga/effects';
import { userSagas } from './user';
import { mapSagas } from './map';

export const rootReducer = combineReducers({
  user,
  map
});

export function* rootSaga() {
  yield fork(userSagas);
  yield fork(mapSagas);
}
