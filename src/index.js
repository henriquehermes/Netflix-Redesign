import React from 'react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import Routes from './routes';

const theme = {
  primary: '#D7240F',
  background: '#111111',
  backgroundSecondary: 'rgba(255,255,255,0.1)',
  inputBackground: '#1C1C1C',
};

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;
