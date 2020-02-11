import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  loadProfileUser,
  loadProfileUserSuccess,
  loadProfileUserError,
  updateProfileUser,
  updateProfileUserSuccess,
  updateProfileUserError
} from '../actions';
import { loadCard, updateCard } from '../../../api';

export default function* watchProfile() {
  yield takeLatest(loadProfileUser, function*(action) {
    try {
      const token = yield select(state => state.user.token);
      const result = yield call(loadCard, token);
      yield put(loadProfileUserSuccess(result));
    } catch (err) {
      yield put(loadProfileUserError(err));
    }
  });

  yield takeLatest(updateProfileUser, function*(action) {
    try {
      const token = yield select(state => state.user.token);
      const result = yield call(updateCard, { ...action.payload, token });
      yield put(updateProfileUserSuccess(result));
      yield put(loadProfileUser());
    } catch (err) {
      yield put(updateProfileUserError(err));
    }
  });
}
