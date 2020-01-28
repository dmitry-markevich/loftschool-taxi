import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../blocks/auth/auth';
import ProfilePage from '../pages/profile/profile';

describe('Login Page', () => {
  it('Рендер', () => {
    render(
      <AuthProvider>
        <ProfilePage />
      </AuthProvider>
    );
  });
});
