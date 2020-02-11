import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';

const apiAddresses = token =>
  fetch('https://loft-taxi.glitch.me/addressList').then(res => res.json());

export default function* watchAddresses() {
  yield takeLatest(actions.loadAddressesMap, function*(action) {
    try {
      const result = yield call(apiAddresses);
      yield put(actions.loadAddressesMapSuccess(result));
    } catch (err) {
      yield put(actions.loadAddressesMapError(err));
    }
  });
}
