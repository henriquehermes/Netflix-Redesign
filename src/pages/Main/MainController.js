import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import MainComponent from './MainComponent';

import NETFLIX_ORIGINALS from '~/config/netflix_originals.json';
import TRENDING from '~/config/trending.json';
import CONTINUE_WATCHING from '~/config/continue_watching.json';
import GENRES from '~/config/genres.json';
import BRAZIL_MOVIES from '~/config/brazil.json';
import USA_MOVIES from '~/config/usa.json';

export default function MainController({ navigation }) {
  async function logoff() {
    await AsyncStorage.removeItem('User');
    navigation.navigate('AuthNavigator');
  }

  return (
    <MainComponent
      NETFLIX_ORIGINALS={NETFLIX_ORIGINALS}
      TRENDING={TRENDING}
      CONTINUE_WATCHING={CONTINUE_WATCHING}
      GENRES={GENRES}
      BRAZIL_MOVIES={BRAZIL_MOVIES}
      USA_MOVIES={USA_MOVIES}
      navigation={navigation}
      logoff={logoff}
    />
  );
}
