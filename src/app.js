import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './blocks/privateRoute/privateRoute';

import './css/app.css';

import Header from './blocks/header/header';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import MapPage from './pages/map/map';
import ProfilePage from './pages/profile/profile';

const App = ({ isAuthed }) => {
  return (
    <div className="tx-app">
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/map" component={MapPage} isAuthed={isAuthed} />
        <PrivateRoute
          path="/profile"
          component={ProfilePage}
          isAuthed={isAuthed}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthed: state.user.isAuthed
});

export default connect(mapStateToProps)(App);
