import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logOutUser } from '../../modules/user';

import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const Header = ({ logOutUser, isAuthed }) => {
  if (isAuthed) {
    return (
      <header>
        <Container>
          <div className="tx-header-content">
            <div className="tx-logo">
              <Logo />
            </div>
            <div className="tx-menu">
              <Link to="/map">
                <Button>Карта</Button>
              </Link>
              <Link to="/profile">
                <Button>Профиль</Button>
              </Link>
              <Button onClick={logOutUser}>Выход</Button>
            </div>
          </div>
        </Container>
      </header>
    );
  } else return null;
};

const mapStateToProps = state => ({
  isAuthed: state.user.isAuthed
});

const mapDispatchToProps = {
  logOutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
