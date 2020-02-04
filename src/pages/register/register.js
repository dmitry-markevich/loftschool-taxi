import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpUser } from '../../modules/user';

import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const RegisterPage = ({ signUpUser, isAuthed, error }) => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (loginInput && passwordInput) {
      signUpUser({
        email: loginInput,
        password: passwordInput,
        name: nameInput,
        surname: surnameInput
      });
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'loginInput':
        setLoginInput(e.target.value);
        break;
      case 'passwordInput':
        setPasswordInput(e.target.value);
        break;
      case 'nameInput':
        setNameInput(e.target.value);
        break;
      case 'surnameInput':
        setSurnameInput(e.target.value);
        break;
      default:
    }
  };

  return (
    <section className="tx-page tx-page-login">
      <div className="tx-page-content">
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className="tx-logo-wr">
                <Logo />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="tx-box">
                <h2>Регистрация</h2>
                {isAuthed ? (
                  <p>Добро пожаловать!</p>
                ) : (
                  <>
                    <p>
                      Уже зарегистрирован?{' '}
                      <Link to="/" className="tx-link">
                        Войти
                      </Link>
                    </p>
                    <form onSubmit={handleSubmit} className="tx-form">
                      <div className="tx-line tx-single">
                        <TextField
                          label="Электронная почта"
                          type="email"
                          name="loginInput"
                          value={loginInput}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="tx-line">
                        <TextField
                          label="Имя"
                          type="text"
                          name="nameInput"
                          value={nameInput}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          label="Фамилия"
                          type="text"
                          name="surnameInput"
                          value={surnameInput}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="tx-line tx-single">
                        <TextField
                          label="Пароль"
                          type="password"
                          name="passwordInput"
                          value={passwordInput}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="tx-line ar">
                        <Button type="submit">Зарегистрироваться</Button>
                      </div>
                      <div className="tx-line">
                        <span className="tx-error">{error}</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthed: state.user.isAuthed,
  error: state.user.error
});

const mapDispatchToProps = {
  signUpUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
