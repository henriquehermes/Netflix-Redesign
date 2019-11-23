import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login/LoginComponent';
import Main from '~/pages/Main/MainComponent';

const Navigation = () => {
  function getAppNavigator() {
    return createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Main: {
        screen: Main,
        navigationOptions: () => ({
          header: null,
        }),
      },
    });
  }

  const Routes = createAppContainer(
    createSwitchNavigator({
      AppNavigator: getAppNavigator(),
    }),
  );
  return <Routes />;
};

export default Navigation;
