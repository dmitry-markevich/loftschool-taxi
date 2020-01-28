import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../blocks/auth/auth';
import LoginPage from '../pages/login/login';

describe('Login Page', () => {
  it('Рендер', () => {
    render(
      <AuthProvider>
        <LoginPage setPage={() => {}} />
      </AuthProvider>
    );
  });
});
