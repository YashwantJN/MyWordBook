import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAuth} from '../context/Auth.context';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

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
