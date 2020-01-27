import React from 'react';
import PropTypes from 'prop-types';
import pages from '../../pages/data';
import { AuthConsumer } from '../../blocks/auth/auth';
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const Header = ({ setPage }) => {
  return (
    <AuthConsumer>
      {({ isLoggedIn, logout }) => {
        if (isLoggedIn)
          return (
            <header>
              <Container>
                <div className="tx-header-content">
                  <div className="tx-logo">
                    <Logo />
                  </div>
                  <div className="tx-menu">
                    {pages.map(page => (
                      <Button onClick={() => setPage(page.url)} key={page.url}>
                        {page.title}
                      </Button>
                    ))}
                    <Button
                      onClick={() => {
                        logout();
                        setPage('login');
                      }}
                    >
                      Выход
                    </Button>
                  </div>
                </div>
              </Container>
            </header>
          );
      }}
    </AuthConsumer>
  );
};

Header.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default Header;
