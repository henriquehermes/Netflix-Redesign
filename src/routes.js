import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '~/pages/Login/LoginComponent';
import Main from '~/pages/Main/MainController';
import Profile from '~/pages/Profile/ProfileComponent';
import Movie from '~/pages/Movie/MovieComponent';

const Navigation = () => {
  function getAppNavigator() {
    return createStackNavigator({
      Main: {
        screen: Main,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Profile: {
        screen: Profile,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Login: {
        screen: Login,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Movie: {
        screen: Movie,
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
