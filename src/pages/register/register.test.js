import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import initStore from '../../store';
import RegisterPage from './register';
require('mutationobserver-shim');

describe('Register Page', () => {
  const store = initStore();
  const history = createMemoryHistory();

  it('Renders correctly', () => {
    const { queryByTestId, queryAllByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </Router>
    );

    expect(queryByTestId('register-form')).toBeTruthy();
    expect(queryAllByText('Регистрация')).toBeTruthy();
  });

  it('Form works', () => {
    const { queryByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </Router>
    );

    const registerInput = queryByTestId('register-input');
    fireEvent.change(registerInput, { target: { value: 'test' } });

    expect(registerInput.value).toBe('test');
  });

  it('Validation works', async () => {
    const { queryByTestId, getByText, getAllByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </Router>
    );

    await act(async () => {
      const registerInput = queryByTestId('register-input');
      const registerSubmit = queryByTestId('register-submit');

      fireEvent.change(registerInput, { target: { value: 'test@' } });
      fireEvent.click(registerSubmit);
    });

    expect(getByText('Необходимо ввести корректный email')).toBeTruthy();
    expect(getAllByText('Поле обязательно')).toBeTruthy();
  });
});
