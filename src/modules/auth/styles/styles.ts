import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors.constant';

export const styles = StyleSheet.create({
  styleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotPassBtnContainer: {
    height: 40,
  },
  forgotPasswordBtn: {
    top: 0,
    right: 34,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    textAlign: 'right',
    borderRadius: 12,
  },
  textButtonForgetPassword: {
    fontWeight: '500',
    fontSize: 16,
    color: '#035efc',
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: Colors.primary,
    letterSpacing: 1,
    paddingBottom: 10,
    marginBottom: 20,
  },
});
