import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { User, useAuth } from '../context/Auth.context';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import { AsyncStorageService } from '../src/services/AsyncStorageService';

export const RootNavigators = (): JSX.Element => {
  const auth = useAuth();

  function unAuthenticated(): any {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  }

  function authenticated(): any {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }

  function renderNavigation(): JSX.Element {
    return (
      <>
        {!auth.isAuthenticated && unAuthenticated()}

        {auth.isAuthenticated && authenticated()}
      </>
    );
  }

  return renderNavigation();
};