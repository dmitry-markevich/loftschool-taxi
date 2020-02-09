import {
  signUpUser,
  signUpUserSuccess,
  signUpUserError,
  signInUser,
  signInUserSuccess,
  signInUserError,
  updateProfileUser,
  updateProfileUserSuccess,
  updateProfileUserError,
  loadProfileUser,
  loadProfileUserSuccess,
  loadProfileUserError
} from './actions';

export const signUserMiddleware = store => next => action => {
  if (action.type === signUpUser.toString()) {
    const { email, password, name, surname } = action.payload;

    fetch('https://loft-taxi.glitch.me/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        name,
        surname
      })
    })
      .then(res => res.json())
      .then(result => store.dispatch(signUpUserSuccess(result)))
      .catch(err => store.dispatch(signUpUserError(err)));
  }

  if (action.type === signInUser.toString()) {
    const { email, password } = action.payload;

    fetch('https://loft-taxi.glitch.me/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(result => store.dispatch(signInUserSuccess(result)))
      .catch(err => store.dispatch(signInUserError(err)));
  }

  return next(action);
};

export const loadProfileMiddleware = store => next => action => {
  if (action.type === loadProfileUser.toString()) {
    fetch(
      'https://loft-taxi.glitch.me/card?token=' + store.getState().user.token
    )
      .then(res => res.json())
      .then(result => store.dispatch(loadProfileUserSuccess(result)))
      .catch(err => store.dispatch(loadProfileUserError(err)));
  }

  return next(action);
};

export const updateProfileMiddleware = store => next => action => {
  if (action.type === updateProfileUser.toString()) {
    const { cardNumber, expiryDate, cardName, cvc } = action.payload;

    fetch('https://loft-taxi.glitch.me/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token: store.getState().user.token
      })
    })
      .then(res => res.json())
      .then(result => {
        store.dispatch(updateProfileUserSuccess(result));
        store.dispatch(loadProfileUser());
      })
      .catch(err => store.dispatch(updateProfileUserError(err)));
  }

  return next(action);
};
