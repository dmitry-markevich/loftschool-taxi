import { fork } from 'redux-saga/effects';
import watchAddresses from './addressListSaga';
import watchRoute from './routeSaga';

export function* mapSagas() {
  yield fork(watchAddresses);
  yield fork(watchRoute);
}
