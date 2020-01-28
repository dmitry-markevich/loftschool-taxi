import React from 'react';
import PropTypes from 'prop-types';
import { AuthConsumer } from '../../blocks/auth/auth';
import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

class LoginPage extends React.Component {
  state = { loginInput: '', passwordInput: '' };

  handleSubmit = e => {
    e.preventDefault();

    const { loginInput, passwordInput } = this.state;

    if (loginInput && passwordInput) {
      this.props.setPage('map');
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    const { loginInput, passwordInput } = this.state;
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
                  <h2>Войти</h2>
                  <p>
                    Новый пользователь?{' '}
                    <span
                      className="tx-link"
                      onClick={() => setPage('register')}
                    >
                      Зарегистрируйтесь
                    </span>
                  </p>
                  <form onSubmit={this.handleSubmit} className="tx-form">
                    <div className="tx-line tx-single">
                      <TextField
                        label="Логин"
                        type="email"
                        name="loginInput"
                        value={loginInput}
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
                      <AuthConsumer>
                        {({ login }) => (
                          <Button
                            type="submit"
                            onClick={() => {
                              loginInput &&
                                passwordInput &&
                                login(loginInput, passwordInput);
                            }}
                          >
                            Войти
                          </Button>
                        )}
                      </AuthConsumer>
                    </div>
                  </form>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    );
  };
}

LoginPage.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default LoginPage;
