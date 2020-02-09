import { fork } from 'redux-saga/effects';
import watchSignIn from './authorizationSaga';
import watchSignUp from './registrationSaga';
import watchProfile from './paymentSaga';

export function* userSagas() {
  yield fork(watchSignIn);
  yield fork(watchSignUp);
  yield fork(watchProfile);
}
