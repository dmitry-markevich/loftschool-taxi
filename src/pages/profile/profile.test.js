import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import initStore from '../../store';
import ProfilePage from './profile';
require('mutationobserver-shim');

describe('Profile Page', () => {
  const store = initStore();
  const history = createMemoryHistory();

  it('Renders correctly', () => {
    const { queryByTestId, queryAllByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <ProfilePage />
        </Provider>
      </Router>
    );

    expect(queryByTestId('profile-form')).toBeTruthy();
    expect(queryAllByText('Профиль')).toBeTruthy();
  });

  it('Form works', () => {
    const { queryByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <ProfilePage />
        </Provider>
      </Router>
    );

    const profileInput = queryByTestId('profile-input');
    fireEvent.change(profileInput, { target: { value: 'test' } });

    expect(profileInput.value).toBe('test');
  });

  it('Validation works', async () => {
    const { queryByTestId, getByText, getAllByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <ProfilePage />
        </Provider>
      </Router>
    );

    await act(async () => {
      const profileSubmit = queryByTestId('profile-submit');
      fireEvent.click(profileSubmit);
    });

    expect(getByText('Пример: 123')).toBeTruthy();
    expect(getAllByText('Поле обязательно')).toBeTruthy();
  });
});
