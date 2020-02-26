import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import initStore from '../../store';
import LoginPage from './login';
require('mutationobserver-shim');

describe('Login Page', () => {
  const store = initStore();
  const history = createMemoryHistory();

  it('Renders correctly', () => {
    const { queryByTestId, queryAllByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Router>
    );

    expect(queryByTestId('login-form')).toBeTruthy();
    expect(queryAllByText('Войти')).toBeTruthy();
  });

  it('Form works', () => {
    const { queryByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Router>
    );

    const loginInput = queryByTestId('login-input');
    fireEvent.change(loginInput, { target: { value: 'test' } });

    expect(loginInput.value).toBe('test');
  });

  it('Validation works', async () => {
    const { queryByTestId, getByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Router>
    );

    await act(async () => {
      const loginInput = queryByTestId('login-input');
      const loginSubmit = queryByTestId('login-submit');

      fireEvent.change(loginInput, { target: { value: 'test@' } });
      fireEvent.click(loginSubmit);
    });

    expect(getByText('Необходимо ввести корректный email')).toBeTruthy();
    expect(getByText('Поле обязательно')).toBeTruthy();
  });
});
