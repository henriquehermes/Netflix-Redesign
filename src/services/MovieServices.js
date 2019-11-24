import NETFLIX_ORIGINALS from '~/config/netflix_originals.json';
import TRENDING from '~/config/trending.json';
import CONTINUE_WATCHING from '~/config/continue_watching.json';
import GENRES from '~/config/genres.json';
import BRAZIL_MOVIES from '~/config/brazil.json';
import USA_MOVIES from '~/config/usa.json';

import MovieModel from '~/models/MovieModel';
import GenresModel from '~/models/GenresModel';

export async function getNetflix() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Fake Delay API

  const response = NETFLIX_ORIGINALS.originals.map(mov => new MovieModel(mov));
  return response;
}

export async function getTrending() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Fake Delay API

  const response = TRENDING.trending.map(mov => new MovieModel(mov));
  return response;
}

export async function getContinueWatching() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Fake Delay API

  const response = CONTINUE_WATCHING.watching.map(mov => new MovieModel(mov));
  return response;
}

export async function getGenres() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Fake Delay API

  const response = GENRES.list.map(gen => new GenresModel(gen));
  return response;
}

export async function getBrazilMovies() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Fake Delay API

  const response = BRAZIL_MOVIES.watching.map(mov => new MovieModel(mov));
  return response;
}

export async function getUsaMovies() {
  await new Promise(resolve => setTimeout(resolve, 100)); // Fake Delay API

  const response = USA_MOVIES.watching.map(mov => new MovieModel(mov));
  return response;
}
