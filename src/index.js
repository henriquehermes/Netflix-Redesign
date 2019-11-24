import React from 'react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import FlashMessage from 'react-native-flash-message';

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
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes initialRouteName="SplashNavigator" />
        <FlashMessage position="top" />
      </ThemeProvider>
    </Provider>
  );
}
