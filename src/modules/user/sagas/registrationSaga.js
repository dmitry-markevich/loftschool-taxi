import { takeLatest, call, put } from 'redux-saga/effects';
import { signUpUser, signUpUserSuccess, signUpUserError } from '../actions';

const apiSignUp = data =>
  fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export default function* watchSignUp() {
  yield takeLatest(signUpUser, function*(action) {
    try {
      const result = yield call(apiSignUp, action.payload);
      yield put(signUpUserSuccess(result));
    } catch (err) {
      yield put(signUpUserError(err));
    }
  });
}
