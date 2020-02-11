import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from './actions';

const addresses = handleActions(
  {
    [actions.loadAddressesMapSuccess]: (_state, action) =>
      action.payload.addresses
  },
  []
);

const route = handleActions(
  {
    [actions.getRouteMapSuccess]: (_state, action) => action.payload
  },
  []
);

const mapError = handleActions(
  {
    [actions.loadAddressesMap]: () => '',
    [actions.loadAddressesMapSuccess]: (_state, action) => action.payload.error,
    [actions.loadAddressesMapError]: (_state, action) =>
      action.payload.statusText || 'Connection error',
    [actions.getRouteMap]: () => '',
    [actions.getRouteMapSuccess]: (_state, action) => action.payload.error,
    [actions.getRouteMapError]: (_state, action) =>
      action.payload.statusText || 'Connection error'
  },
  ''
);

const mapLoading = handleActions(
  {
    [actions.getRouteMap]: () => true,
    [actions.getRouteMapSuccess]: () => false,
    [actions.getRouteMapError]: () => false
  },
  false
);

export default combineReducers({
  addresses,
  route,
  mapError,
  mapLoading
});
