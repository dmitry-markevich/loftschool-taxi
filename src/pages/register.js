import React from 'react';

class RegisterPage extends React.Component {
  state = {
    loginInput: '',
    passwordInput: '',
    nameInput: '',
    surnameInput: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      msg: JSON.stringify({
        login: this.state.loginInput,
        password: this.state.passwordInput,
        name: this.state.nameInput,
        surname: this.state.surnameInput
      })
    });

    if (
      this.state.loginInput &&
      this.state.passwordInput &&
      this.state.nameInput &&
      this.state.surnameInput
    ) {
      this.props.goToPage('map');
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render = () => {
    const { loginInput, passwordInput, nameInput, surnameInput } = this.state;

    return (
      <div className="tx-page tx-page-register">
        <h1>Register Page</h1>

        <form onSubmit={this.handleSubmit} className="tx-form">
          <div>
            <label>Имя: </label>
            <input
              type="text"
              name="nameInput"
              value={nameInput}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Фамилия: </label>
            <input
              type="text"
              name="surnameInput"
              value={surnameInput}
              onChange={this.handleChange}
            />
          </div>

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
            <input type="submit" value="Регистрация" />
          </div>
        </form>

        <div className="tx-msg">{this.state.msg}</div>
      </div>
    );
  };
}

export default RegisterPage;
