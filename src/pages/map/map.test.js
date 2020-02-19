import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import initStore from '../../store';
import MapPage from './map';
require('mutationobserver-shim');

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));

export default undefined;

describe('Map Page', () => {
  window.URL.createObjectURL = jest.fn();

  const store = initStore();
  const history = createMemoryHistory();

  it('Renders correctly', () => {
    const { getByText } = render(
      <Router history={history}>
        <Provider store={store}>
          <MapPage />
        </Provider>
      </Router>
    );

    expect(getByText('Для заказа такси необходимо заполнить')).toBeTruthy();
  });
});
