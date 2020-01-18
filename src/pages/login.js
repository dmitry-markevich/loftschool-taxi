import React from 'react';

class LoginPage extends React.Component {
  state = { loginInput: '', passwordInput: '' };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      msg: JSON.stringify({
        login: this.state.loginInput,
        password: this.state.passwordInput
      })
    });

    if (this.state.loginInput && this.state.passwordInput) {
      this.props.goToPage('map');
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    const { loginInput, passwordInput } = this.state;

    return (
      <div className="tx-page tx-page-login">
        <h1>Login Page</h1>

        <form onSubmit={this.handleSubmit} className="tx-form">
          <div>
            <label>Логин: </label>
            <input
              type="email"
              name="loginInput"
              value={loginInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Пароль: </label>
            <input
              type="password"
              name="passwordInput"
              value={passwordInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input type="submit" value="Войти" />
          </div>
        </form>

        <div className="tx-msg">{this.state.msg}</div>
      </div>
    );
  };
}

export default LoginPage;
