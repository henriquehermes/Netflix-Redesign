import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import Routes from './routes';

const theme = {
  primary: '#D7240F',
  background: '#111111',
  backgroundSecondary: 'rgba(255,255,255,0.1)',
  inputBackground: '#1C1C1C',
  highlight: '#1ABD32',
};

export default function App() {
  const [route, setRoute] = useState('AuthNavigator');

  useEffect(() => {
    async function getUserLogged() {
      const response = await AsyncStorage.getItem('User');
      if (response) {
        setRoute('AppNavigator');
      } else {
        setRoute('AuthNavigator');
      }
    }
    getUserLogged();
  }, []);

  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes initialRouteName={route} />
      </ThemeProvider>
    </Provider>
  );
}
