import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SplashComponent from './SplashComponent';

export default function SplashController({ navigation }) {
  useEffect(() => {
    async function getUserLogged() {
      const response = await AsyncStorage.getItem('User');
      if (response) {
        navigation.navigate('AppNavigator');
      } else {
        navigation.navigate('AuthNavigator');
      }
    }
    getUserLogged();
  }, []);

  return <SplashComponent />;
}
