import React, { useState } from 'react';
import { showMessage } from 'react-native-flash-message';

import postLogin from '~/services/LoginServices';
import LoginComponent from './LoginComponent';

export default function LoginController({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  async function login(email, password) {
    setIsLoading(true);
    const response = await postLogin(email, password);

    if (response) {
      navigation.navigate('AppNavigator');
      return;
    }

    setIsLoading(false);
    showMessage({
      message: 'Error',
      description:
        'There was an error with your Email/Password combination. Please try again.',
      type: 'danger',
      backgroundColor: '#D7240F',
      color: '#fff',
    });
  }

  return (
    <LoginComponent
      loginInApp={(email, password) => login(email, password)}
      isLoading={isLoading}
    />
  );
}
