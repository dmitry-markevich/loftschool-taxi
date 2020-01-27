import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

class RegisterPage extends React.Component {
  state = {
    loginInput: '',
    passwordInput: '',
    nameInput: '',
    surnameInput: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { loginInput, passwordInput, nameInput, surnameInput } = this.state;

    this.setState({
      msg: JSON.stringify({
        login: loginInput,
        password: passwordInput,
        name: nameInput,
        surname: surnameInput
      })
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    const { loginInput, passwordInput, nameInput, surnameInput } = this.state;
    const { setPage } = this.props;

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
                  <p>
                    Уже зарегистрирован?{' '}
                    <span className="tx-link" onClick={() => setPage('login')}>
                      Войти
                    </span>
                  </p>
                  <form onSubmit={this.handleSubmit} className="tx-form">
                    <div className="tx-line tx-single">
                      <TextField
                        label="Электронная почта"
                        type="email"
                        name="loginInput"
                        value={loginInput}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="tx-line">
                      <TextField
                        label="Имя"
                        type="text"
                        name="nameInput"
                        value={nameInput}
                        onChange={this.handleChange}
                        required
                      />
                      <TextField
                        label="Фамилия"
                        type="text"
                        name="surnameInput"
                        value={surnameInput}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="tx-line tx-single">
                      <TextField
                        label="Пароль"
                        type="password"
                        name="passwordInput"
                        value={passwordInput}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="tx-line ar">
                      <Button type="submit">Зарегистрироваться</Button>
                    </div>
                  </form>
                  <div className="tx-msg">{this.state.msg}</div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    );
  };
}

RegisterPage.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default RegisterPage;
