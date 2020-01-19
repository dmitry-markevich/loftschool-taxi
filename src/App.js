import React from 'react';
import './app.css';

import pages from './pages';

import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import MapPage from './pages/map';
import ProfilePage from './pages/profile';

class App extends React.Component {
  state = {
    page: 'login'
  };

  setPage = page => {
    this.setState({
      page
    });
  };

  render = () => (
    <div className="tx-app">
      <header>
        <ul className="tx-nav">
          {pages.map(page => (
            <li onClick={() => this.setPage(page.url)} key={page.url}>
              {page.title}
            </li>
          ))}
        </ul>
      </header>

      <section className="tx-content">
        {
          {
            login: <LoginPage goToPage={this.setPage} />,
            register: <RegisterPage goToPage={this.setPage} />,
            map: <MapPage />,
            profile: <ProfilePage />
          }[this.state.page]
        }
      </section>
    </div>
  );
}

export default App;
