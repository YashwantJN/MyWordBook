import React from 'react';
import AuthContextProvider from './context/Auth.context';
import {RootNavigators} from './navigation/RootNavigator';

const App = () => {
  return (
    <AuthContextProvider>
      <RootNavigators />
    </AuthContextProvider>
  );
};

export default App;
