import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  signUpUser,
  signUpUserSuccess,
  signUpUserError,
  signInUser,
  signInUserSuccess,
  signInUserError,
  logOutUser,
  updateProfileUser,
  updateProfileUserSuccess,
  updateProfileUserError,
  loadProfileUser,
  loadProfileUserSuccess,
  loadProfileUserError
} from './actions';

const isAuthed = handleActions(
  {
    [signUpUserSuccess]: (_state, action) => action.payload.success,
    [signInUserSuccess]: (_state, action) => action.payload.success,
    [logOutUser]: () => false
  },
  false
);

const token = handleActions(
  {
    [signUpUserSuccess]: (_state, action) => action.payload.token,
    [signInUserSuccess]: (_state, action) => action.payload.token,
    [logOutUser]: () => null
  },
  null
);

const card = handleActions(
  {
    [loadProfileUserSuccess]: (_state, action) => action.payload
  },
  {}
);

const errorSignUp = handleActions(
  {
    [signUpUser]: () => '',
    [signUpUserSuccess]: (_state, action) => action.payload.error,
    [signUpUserError]: (_state, action) =>
      action.payload.statusText || 'Connection error'
  },
  ''
);

const errorSignIn = handleActions(
  {
    [signInUser]: () => '',
    [signInUserSuccess]: (_state, action) => action.payload.error,
    [signInUserError]: (_state, action) =>
      action.payload.statusText || 'Connection error'
  },
  ''
);

const errorProfile = handleActions(
  {
    [updateProfileUser]: () => '',
    [updateProfileUserSuccess]: (_state, action) => action.payload.error,
    [updateProfileUserError]: (_state, action) =>
      action.payload.statusText || 'Connection error',
    [loadProfileUser]: () => '',
    [loadProfileUserSuccess]: (_state, action) => action.payload.error,
    [loadProfileUserError]: (_state, action) =>
      action.payload.statusText || 'Connection error'
  },
  ''
);

const loadingSignUp = handleActions(
  {
    [signUpUser]: () => true,
    [signUpUserSuccess]: () => false,
    [signUpUserError]: () => false
  },
  false
);

const loadingSignIn = handleActions(
  {
    [signInUser]: () => true,
    [signInUserSuccess]: () => false,
    [signInUserError]: () => false
  },
  false
);

const loadingProfile = handleActions(
  {
    [loadProfileUser]: () => true,
    [loadProfileUserSuccess]: () => false,
    [loadProfileUserError]: () => false
  },
  false
);

export default combineReducers({
  isAuthed,
  token,
  card,
  errorSignUp,
  errorSignIn,
  errorProfile,
  loadingSignUp,
  loadingSignIn,
  loadingProfile
});
