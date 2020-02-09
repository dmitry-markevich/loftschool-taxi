import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';

const apiRoute = (address1, address2) =>
  fetch(
    'https://loft-taxi.glitch.me/route?address1=' +
      address1 +
      '&address2=' +
      address2
  ).then(res => res.json());

export default function* watchRoute() {
  yield takeLatest(actions.getRouteMap, function*(action) {
    const { address1, address2 } = action.payload;
    try {
      const result = yield call(apiRoute, address1, address2);
      yield put(actions.getRouteMapSuccess(result));
    } catch (err) {
      yield put(actions.getRouteMapError(err));
    }
  });
}
