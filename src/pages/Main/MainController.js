import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import MainComponent from './MainComponent';
import {
  getNetflix,
  getTrending,
  getContinueWatching,
  getGenres,
  getBrazilMovies,
  getUsaMovies,
} from '~/services/MovieServices';

export default function MainController({ navigation }) {
  const [Netflix, setNetflix] = useState([]);
  const [Trending, setTrending] = useState([]);
  const [ContinueWatching, setContinueWatching] = useState([]);
  const [Genres, setGenres] = useState([]);
  const [BrazilMovies, setBrazilMovies] = useState([]);
  const [UsaMovies, setUsaMovies] = useState([]);

  async function logoff() {
    await AsyncStorage.removeItem('User');
    navigation.navigate('AuthNavigator');
  }

  async function MainData() {
    const netflix = await getNetflix();
    setNetflix(netflix);

    const trending = await getTrending();
    setTrending(trending);

    const continueW = await getContinueWatching();
    setContinueWatching(continueW);

    const genres = await getGenres();
    setGenres(genres);

    const brazil = await getBrazilMovies();
    setBrazilMovies(brazil);

    const usa = await getUsaMovies();
    setUsaMovies(usa);
  }

  useEffect(() => {
    MainData();
  }, []);

  return (
    <MainComponent
      NETFLIX_ORIGINALS={Netflix}
      TRENDING={Trending}
      CONTINUE_WATCHING={ContinueWatching}
      GENRES={Genres}
      BRAZIL_MOVIES={BrazilMovies}
      USA_MOVIES={UsaMovies}
      navigation={navigation}
      logoff={logoff}
    />
  );
}
