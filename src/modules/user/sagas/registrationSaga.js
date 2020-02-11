import { takeLatest, call, put } from 'redux-saga/effects';
import { signUpUser, signUpUserSuccess, signUpUserError } from '../actions';
import { signUp } from '../../../api';

export default function* watchSignUp() {
  yield takeLatest(signUpUser, function*(action) {
    try {
      const result = yield call(signUp, action.payload);
      yield put(signUpUserSuccess(result));
    } catch (err) {
      yield put(signUpUserError(err));
    }
  });
}
