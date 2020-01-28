import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../blocks/auth/auth';
import RegisterPage from '../pages/register/register';

describe('Login Page', () => {
  it('Рендер', () => {
    render(
      <AuthProvider>
        <RegisterPage setPage={() => {}} />
      </AuthProvider>
    );
  });
});
