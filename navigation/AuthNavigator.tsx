import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../src/constants/Colors.constant';
import WelcomeScreen from '../src/modules/entry/WelcomeScreen';
import LoginScreen from '../src/modules/auth/LogIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthNavigator(): JSX.Element {

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <>
    <SafeAreaView style={{flex: 0, backgroundColor: Colors.primary}} />
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'Back',
          headerTintColor: Colors.lightTheme,
          headerStyle: { backgroundColor: Colors.primary },
          headerTitleAlign: 'center',
        }}>
 
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>

      </SafeAreaView>
    </>
  );
}

export default AuthNavigator;
