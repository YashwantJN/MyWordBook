import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../src/constants/Colors.constant';
import WelcomeScreen from '../src/modules/entry/WelcomeScreen';
import LoginScreen from '../src/modules/auth/LogIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AuthNavigator(): JSX.Element {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: 'Back',
            headerTintColor: Colors.lightTheme,
            headerStyle: {backgroundColor: Colors.primary},
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaTop: {flex: 0, backgroundColor: Colors.primary},
  safeAreaBottom: {flex: 1, backgroundColor: Colors.white},
});

export default AuthNavigator;
