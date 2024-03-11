import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../src/constants/Colors.constant';
import HomeScreen from '../src/modules/home/HomeScreen';
import InformationScreen from '../src/modules/information/InformationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeNavigator(): JSX.Element {
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
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Info"
            component={InformationScreen}
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

export default HomeNavigator;
