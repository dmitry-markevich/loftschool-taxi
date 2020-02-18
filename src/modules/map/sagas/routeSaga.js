import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import { getRoute } from '../../../api';

export default function* watchRoute() {
  yield takeLatest(actions.getRouteMap, function*(action) {
    const { address1, address2 } = action.payload;
    try {
      const result = yield call(getRoute, address1, address2);
      yield put(actions.getRouteMapSuccess(result));
    } catch (err) {
      yield put(actions.getRouteMapError(err));
    }
  });
}
