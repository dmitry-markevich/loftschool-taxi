import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { signUpUser } from '../../modules/user';

import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const RegisterPage = ({ signUpUser, isAuthed, error, loading }) => {
  const handleForm = ({
    loginInput,
    passwordInput,
    nameInput,
    surnameInput
  }) => {
    signUpUser({
      email: loginInput,
      password: passwordInput,
      name: nameInput,
      surname: surnameInput
    });
  };

  const signUpSchema = yup.object().shape({
    loginInput: yup
      .string()
      .email('Необходимо ввести корректный email')
      .required('Поле обязательно'),
    passwordInput: yup.string().required('Поле обязательно'),
    nameInput: yup.string().required('Поле обязательно'),
    surnameInput: yup.string().required('Поле обязательно')
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: signUpSchema
  });

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
                    <form
                      onSubmit={handleSubmit(handleForm)}
                      className="tx-form"
                      data-testid="register-form"
                    >
                      <div className="tx-line tx-single">
                        <TextField
                          label="Электронная почта"
                          type="text"
                          name="loginInput"
                          inputRef={register}
                          error={!!errors.loginInput}
                          helperText={
                            errors.loginInput && errors.loginInput.message
                          }
                          inputProps={{
                            'data-testid': 'register-input'
                          }}
                        />
                      </div>
                      <div className="tx-line">
                        <TextField
                          label="Имя"
                          type="text"
                          name="nameInput"
                          inputRef={register}
                          error={!!errors.nameInput}
                          helperText={
                            errors.nameInput && errors.nameInput.message
                          }
                        />
                        <TextField
                          label="Фамилия"
                          type="text"
                          name="surnameInput"
                          inputRef={register}
                          error={!!errors.surnameInput}
                          helperText={
                            errors.surnameInput && errors.surnameInput.message
                          }
                        />
                      </div>
                      <div className="tx-line tx-single">
                        <TextField
                          label="Пароль"
                          type="password"
                          name="passwordInput"
                          inputRef={register}
                          error={!!errors.passwordInput}
                          helperText={
                            errors.passwordInput && errors.passwordInput.message
                          }
                        />
                      </div>
                      <div className="tx-line ar">
                        <Button type="submit" data-testid="register-submit">
                          <span>Зарегистрироваться</span>
                          {loading ? <span className="tx-loader"></span> : null}
                        </Button>
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
  error: state.user.errorSignUp,
  loading: state.user.loadingSignUp
});

const mapDispatchToProps = {
  signUpUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
