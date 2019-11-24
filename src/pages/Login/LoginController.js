import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { showMessage } from 'react-native-flash-message';

import LoginComponent from './LoginComponent';
import USERS from '~/config/users.json';

export default function LoginController({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  async function login(email, password) {
    setIsLoading(true);
    if (email === 'marcela@email.com' && password === '123') {
      await AsyncStorage.setItem('User', JSON.stringify(USERS.list[0]));
      navigation.navigate('AppNavigator');
      return;
    }
    if (email === 'ian@email.com' && password === '123') {
      await AsyncStorage.setItem('User', JSON.stringify(USERS.list[1]));
      navigation.navigate('AppNavigator');
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
