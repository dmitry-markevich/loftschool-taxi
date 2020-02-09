import { takeLatest, call, put } from 'redux-saga/effects';
import { signInUser, signInUserSuccess, signInUserError } from '../actions';

const apiSignIn = data =>
  fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export default function* watchSignIn() {
  yield takeLatest(signInUser, function*(action) {
    try {
      const result = yield call(apiSignIn, action.payload);
      yield put(signInUserSuccess(result));
    } catch (err) {
      yield put(signInUserError(err));
    }
  });
}
