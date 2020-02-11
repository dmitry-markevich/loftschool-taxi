import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  loadProfileUser,
  loadProfileUserSuccess,
  loadProfileUserError,
  updateProfileUser,
  updateProfileUserSuccess,
  updateProfileUserError
} from '../actions';

const apiCardLoad = token =>
  fetch('https://loft-taxi.glitch.me/card?token=' + token).then(res =>
    res.json()
  );

const apiCardUpdate = data =>
  fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export default function* watchProfile() {
  yield takeLatest(loadProfileUser, function*(action) {
    try {
      const token = yield select(state => state.user.token);
      const result = yield call(apiCardLoad, token);
      yield put(loadProfileUserSuccess(result));
    } catch (err) {
      yield put(loadProfileUserError(err));
    }
  });

  yield takeLatest(updateProfileUser, function*(action) {
    try {
      const token = yield select(state => state.user.token);
      const result = yield call(apiCardUpdate, { ...action.payload, token });
      yield put(updateProfileUserSuccess(result));
      yield put(loadProfileUser());
    } catch (err) {
      yield put(updateProfileUserError(err));
    }
  });
}
