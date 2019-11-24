import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from '~/pages/Splash/SplashController';
import Login from '~/pages/Login/LoginController';
import Main from '~/pages/Main/MainController';
import Profile from '~/pages/Profile/ProfileController';
import Movie from '~/pages/Movie/MovieComponent';
import Category from '~/pages/Category/CategoryController';

const Navigation = ({ initialRouteName }) => {
  function getSplashNavigator() {
    return createStackNavigator({
      Splash: {
        screen: Splash,
        navigationOptions: () => ({
          header: null,
        }),
      },
    });
  }

  function getAuthNavigator() {
    return createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: () => ({
          header: null,
        }),
      },
    });
  }
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
      Movie: {
        screen: Movie,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Category: {
        screen: Category,
        navigationOptions: () => ({
          header: null,
        }),
      },
    });
  }

  const Routes = createAppContainer(
    createSwitchNavigator(
      {
        SplashNavigator: getSplashNavigator(),
        AuthNavigator: getAuthNavigator(),
        AppNavigator: getAppNavigator(),
      },
      {
        initialRouteName,
      },
    ),
  );
  return <Routes />;
};

export default Navigation;
