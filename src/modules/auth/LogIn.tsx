import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useAuth, User} from '../../../context/Auth.context';
import Form from '../../components/card/Form';
import validate from './hooks/useValidationInfo';
import useValidatorForm from './hooks/useValidatorForm';
import {styles} from './styles/styles';
import {RouteProp, useRoute} from '@react-navigation/native';
import Loader from '../../components/loader/Loader';

interface LoginScreenProps {
  user?: User;
}

type LoginScreenRouteProp = RouteProp<{
  LoginScreen: LoginScreenProps;
}>;

const LoginScreen = (): JSX.Element => {
  const [authenticating, setAuthenticating] = useState(false);
  const route = useRoute<LoginScreenRouteProp>();

  const submitLoginRequest = (): void => {
    submitLoginApiRequest();
  };

  const {handleChange, handleSubmit, values, errors} = useValidatorForm(
    submitLoginRequest,
    validate,
  );

  const auth = useAuth();
  const height = useWindowDimensions().height;

  useEffect(() => {
    if (route.params.user?.email !== '') {
      inputValueHandler(route.params.user?.email!, 'email');
    }
  });

  function didPressedForGotPassword(): void {
    console.log('Forgot Password');
  }

  function submitLoginApiRequest(): void {
    setAuthenticating(true);
    setTimeout(() => {
      setAuthenticating(false);
      auth.authenticate(values);
    }, 2000);
  }

  function inputValueHandler(value: string, identifier: string): void {
    switch (identifier) {
      case 'email':
        handleChange({name: 'email', value});
        break;
      case 'password':
        handleChange({name: 'password', value});
        break;
    }
  }

  const formElements = [
    {
      id: 'email',
      label: 'Email',
      textInput: values.email,
      isSecuredField: false,
      error: errors.email,
    },
    {
      id: 'password',
      label: 'Password',
      textInput: values.password,
      isSecuredField: true,
      error: errors.password,
    },
  ];
  const formButton = {
    title: 'Submit',
  };

  const formProps = {
    cardElemets: formElements,
    cardButton: formButton,
    didPressedSubmitButton: handleSubmit,
    inputValueHandler,
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      indicatorStyle={'black'}
      automaticallyAdjustKeyboardInsets={true}
      keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView
        enabled
        behavior="height"
        style={styles.styleContainer}>
        <View style={{height, justifyContent: 'center'}}>
          <Text style={styles.textSignIn}>Authenticate Here!</Text>
          <Form {...formProps} />
          <View style={styles.forgotPassBtnContainer}>
            <Pressable
              style={styles.forgotPasswordBtn}
              onPress={didPressedForGotPassword}>
              <Text style={styles.textButtonForgetPassword}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
          <Loader isLoading={authenticating} text="Validating..." />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;
