import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();

const Auth = props => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = (email, password) => {
    console.log('loggedIn', email, password);
    setLoggedIn(true);
  };

  const logout = () => {
    console.log('loggedOut');
    setLoggedIn(false);
  };

  return (
    <Provider
      value={{
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
      }}
    >
      {props.children}
    </Provider>
  );
};

export { Auth as AuthProvider, Consumer as AuthConsumer };
