import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import initStore from '../store';
import App from '../app';
require('mutationobserver-shim');

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}));

test('App routing', () => {
  window.URL.createObjectURL = jest.fn();

  const store = initStore();
  const history = createMemoryHistory();

  const { getByText, getAllByText } = render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );

  expect(getAllByText('Войти')).toBeTruthy();
  fireEvent.click(getByText('Зарегистрируйтесь'));
  expect(getByText('Регистрация')).toBeTruthy();
});
