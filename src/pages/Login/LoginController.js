import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginComponent from './LoginComponent';
import USERS from '~/config/users.json';

export default function LoginController({ navigation }) {
  async function login(email, password) {
    if (email === 'marcela@email.com' && password === '123') {
      await AsyncStorage.setItem('User', JSON.stringify(USERS.list[0]));
      navigation.navigate('AppNavigator');
      return;
    }
    if (email === 'ian@email.com' && password === '123') {
      await AsyncStorage.setItem('User', JSON.stringify(USERS.list[1]));
      navigation.navigate('AppNavigator');
    }
  }

  return (
    <LoginComponent loginInApp={(email, password) => login(email, password)} />
  );
}
