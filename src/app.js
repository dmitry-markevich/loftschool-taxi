import React, { useState } from 'react';
import './css/app.css';
import { AuthProvider } from './blocks/auth/auth';
import Header from './blocks/header/header';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import MapPage from './pages/map/map';
import ProfilePage from './pages/profile/profile';

const App = () => {
  const [page, setPage] = useState('login');

  return (
    <AuthProvider>
      <div className="tx-app">
        <Header setPage={setPage} />
        {
          {
            login: <LoginPage setPage={setPage} />,
            register: <RegisterPage setPage={setPage} />,
            map: <MapPage />,
            profile: <ProfilePage />
          }[page]
        }
      </div>
    </AuthProvider>
  );
};

export default App;
