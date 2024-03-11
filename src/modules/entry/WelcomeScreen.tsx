import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../../constants/Colors.constant';
import PrimaryButton from '../../components/button/PrimaryButton';
import Images from '../../constants/Images.constant';
import {User} from '../../../context/Auth.context';
import {AsyncStorageService} from '../../services/AsyncStorageService';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  const [user, setUser] = useState<User>({email: '', password: ''});

  useEffect(() => {
    checkUserAuthentication().then(res => {
      if (res !== undefined) {
        setUser(res);
      }
    });
  }, []);

  async function checkUserAuthentication(): Promise<User | undefined> {
    const userData: User = await AsyncStorageService.getData('userData');
    if (userData.email && userData.password) {
      return userData;
    }
    return undefined;
  }

  const navigateToRegister = () => {
    navigation.navigate('Login', {
      user: user,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thank you for choosing</Text>
      <Text style={styles.logo}>MY BOOK</Text>
      <Image source={Images.girlWithBook} style={styles.image} />
      <Text style={styles.subHeading}>Explore the world of words!</Text>
      <PrimaryButton
        title={'READ >>'}
        onPress={navigateToRegister}
        marginTop={16}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors.primary,
    textAlign: 'center',
    letterSpacing: 1,
  },
  logo: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.button,
    textAlign: 'center',
    letterSpacing: 1.5,
    paddingTop: 5,
  },
  image: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '200',
    color: Colors.primary,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
