export const signUp = data =>
  fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const signIn = data =>
  fetch('https://loft-taxi.glitch.me/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const getAddresses = () =>
  fetch('https://loft-taxi.glitch.me/addressList').then(res => res.json());

export const getRoute = (address1, address2) =>
  fetch(
    'https://loft-taxi.glitch.me/route?address1=' +
      address1 +
      '&address2=' +
      address2
  ).then(res => res.json());

export const loadCard = token =>
  fetch('https://loft-taxi.glitch.me/card?token=' + token).then(res =>
    res.json()
  );

export const updateCard = data =>
  fetch('https://loft-taxi.glitch.me/card', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
