/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useContext, useState} from 'react';
import {AsyncStorageService} from '../src/services/AsyncStorageService';

export interface User {
  email: string;
  password: string;
}

const AuthContext = createContext({
  isAuthenticated: false,
  authenticate: (user: User) => {},
  userData: {email: '', password: ''},
});

export function useAuth(): any {
  const context = useContext(AuthContext);
  if (context === undefined) {
    console.error('useAuth must be used within Provider');
  }
  return context;
}

const AuthContextProvider = (props: any): JSX.Element => {
  const [authToken, setAuthToken] = useState<User>({email: '', password: ''});

  function setAuthTokenContext(user: User): void {
    setAuthToken(user);
    AsyncStorageService.saveData(user, 'userData');
  }

  const value = {
    isAuthenticated: !(authToken?.email === ''),
    authenticate: setAuthTokenContext,
    userData: authToken,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
