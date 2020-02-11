import { createAction } from 'redux-actions';

export const loadAddressesMap = createAction('LOAD_ADDRESSES_MAP');
export const loadAddressesMapSuccess = createAction(
  'LOAD_ADDRESSES_MAP_SUCCESS'
);
export const loadAddressesMapError = createAction('LOAD_ADDRESSES_MAP_ERROR');

export const getRouteMap = createAction('GET_ROUTE_MAP');
export const getRouteMapSuccess = createAction('GET_ROUTE_MAP_SUCCESS');
export const getRouteMapError = createAction('GET_ROUTE_MAP_ERROR');
