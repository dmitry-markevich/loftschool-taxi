import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../blocks/auth/auth';
import MapPage from '../pages/map/map';

describe('Login Page', () => {
  it('Рендер', () => {
    render(
      <AuthProvider>
        <MapPage />
      </AuthProvider>
    );
  });
});
