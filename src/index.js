import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import initStore from './store';
import App from './app';

import './css/index.css';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

const store = initStore();

store.subscribe(() => {
  const state = store.getState();
  sessionStorage.loftTaxi = state.user.isAuthed ? JSON.stringify(state) : '';
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>{' '}
  </BrowserRouter>,
  document.getElementById('root')
);
