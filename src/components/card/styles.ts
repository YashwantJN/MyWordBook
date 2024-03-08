import {Dimensions, StyleSheet} from 'react-native';
import { Colors } from '../../constants/Colors.constant';

const deviceDimension = Dimensions.get('window').height;

export const formStyle = (cardHeight: any = null): any =>
  StyleSheet.create({
    containerCardView: {
      height: cardHeight,
    },
    cardView: {
      flex: 1,
      margin: deviceDimension < 800 ? 15 : 20,
      backgroundColor: 'white',
      borderRadius: 30,
      justifyContent: 'space-evenly',
    },
    textLabel: {
      width: '80%',
      alignSelf: 'center',
      fontWeight: '500',
      fontSize: deviceDimension < 800 ? 15 : 18,
      color: Colors.primary,
    },
    textInput: {
      alignSelf: 'center',
      borderBottomWidth: 0.5,
      borderRadius: 10,
      height: 44,
      width: '80%',
      fontSize: deviceDimension < 800 ? 15 : 18,
      backgroundColor: 'white',
      color: 'black',
    },
    errorMessageContainer: {
      justifyContent: 'center',
      height: 25,
    },
    errorMessage: {
      color: 'red',
      width: '80%',
      alignSelf: 'center',
      fontSize: 16,
    },
    submitBtnContainer: {
      height: 54,
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitBtn: {
      flex: 1,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      backgroundColor: Colors.primary,
      borderRadius: 12,
    },
    textButtonSignIn: {
      fontWeight: '700',
      fontSize: deviceDimension < 800 ? 15 : 18,
      color: 'white',
      textAlign: 'center',
    },
  });
