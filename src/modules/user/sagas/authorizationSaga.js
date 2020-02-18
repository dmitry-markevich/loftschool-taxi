import { takeLatest, call, put } from 'redux-saga/effects';
import { signInUser, signInUserSuccess, signInUserError } from '../actions';
import { signIn } from '../../../api';

export default function* watchSignIn() {
  yield takeLatest(signInUser, function*(action) {
    try {
      const result = yield call(signIn, action.payload);
      yield put(signInUserSuccess(result));
    } catch (err) {
      yield put(signInUserError(err));
    }
  });
}
