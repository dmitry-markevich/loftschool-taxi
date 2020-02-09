import { createAction } from 'redux-actions';

export const signUpUser = createAction('SIGN_UP_USER');
export const signUpUserSuccess = createAction('SIGN_UP_USER_SUCCESS');
export const signUpUserError = createAction('SIGN_UP_USER_ERROR');

export const signInUser = createAction('SIGN_IN_USER');
export const signInUserSuccess = createAction('SIGN_IN_USER_SUCCESS');
export const signInUserError = createAction('SIGN_IN_USER_ERROR');

export const logOutUser = createAction('LOG_OUT_USER');

export const loadProfileUser = createAction('LOAD_PROFILE_USER');
export const loadProfileUserSuccess = createAction('LOAD_PROFILE_USER_SUCCESS');
export const loadProfileUserError = createAction('LOAD_PROFILE_USER_ERROR');

export const updateProfileUser = createAction('UPDATE_PROFILE_USER');
export const updateProfileUserSuccess = createAction(
  'UPDATE_PROFILE_USER_SUCCESS'
);
export const updateProfileUserError = createAction('UPDATE_PROFILE_USER_ERROR');
