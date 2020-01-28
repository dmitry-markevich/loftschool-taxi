import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../blocks/auth/auth';
import Header from '../blocks/header/header';

describe('Header', () => {
  it('Рендер', () => {
    render(
      <AuthProvider>
        <Header setPage={() => {}} />
      </AuthProvider>
    );
  });
});
