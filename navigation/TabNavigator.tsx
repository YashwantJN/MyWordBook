import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {Colors} from '../src/constants/Colors.constant';
import HomeNavigator from './HomeNavigator';
import Images from '../src/constants/Images.constant';
import SearchScreen from '../src/modules/search/SearchScreen';

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <Tab.Navigator
          screenOptions={({}) => ({
            tabBarActiveTintColor: Colors.lightTheme,
            // tabBarActiveBackgroundColor: Colors.button,
            // tabBarInactiveTintColor: Colors.white,
            headerShown: false,
            tabBarLabelPosition: 'below-icon',
          })}>
          <Tab.Screen
            name="HomeTab"
            component={HomeNavigator}
            options={{
              tabBarLabel: ({}) => <Text style={styles.labelStyle}>Home</Text>,
              tabBarIcon: ({focused}) => (
                <Image
                  source={focused ? Images.homeSelected : Images.home}
                  style={styles.iconStyle}
                />
              ),
            }}
          />
          <Tab.Screen
            name="SearchTab"
            component={SearchScreen}
            options={{
              tabBarLabel: ({}) => (
                <Text style={styles.labelStyle}>Search</Text>
              ),
              tabBarIcon: ({focused}) => (
                <Image
                  source={focused ? Images.searchSelected : Images.search}
                  style={styles.iconStyle}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  labelStyle: {
    fontSize: 14,
    fontWeight: '200',
    letterSpacing: 1,
  },
  safeAreaTop: {flex: 0, backgroundColor: Colors.primary},
  safeAreaBottom: {flex: 1, backgroundColor: Colors.white},
});

export default TabNavigator;
