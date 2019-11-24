import React from 'react';
import { useSelector } from 'react-redux';

import MovieComponent from './MovieComponent';

export default function MovieController({ navigation }) {
  const detailMovie = useSelector(state => state.movie.detail);

  return <MovieComponent navigation={navigation} detailMovie={detailMovie} />;
}
