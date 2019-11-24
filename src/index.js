import React from 'react';

import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import store from './store';
import Routes from './routes';

export default function App() {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <Routes initialRouteName="SplashNavigator" />
      <FlashMessage position="top" />
    </Provider>
  );
}
