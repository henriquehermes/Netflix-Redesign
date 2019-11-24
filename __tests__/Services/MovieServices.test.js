/**
 * @format
 */

import 'react-native';
import {
  getNetflix,
  getTrending,
  getContinueWatching,
  getGenres,
  getBrazilMovies,
  getUsaMovies,
} from '../../src/services/MovieServices';

test('Success getNetflix', () => {
  return getNetflix().then(res => {
    expect(res).toBeTruthy();
  });
});

test('Success getTrending', () => {
  return getTrending().then(res => {
    expect(res).toBeTruthy();
  });
});

test('Success getContinueWatching', () => {
  return getContinueWatching().then(res => {
    expect(res).toBeTruthy();
  });
});

test('Success getGenres', () => {
  return getGenres().then(res => {
    expect(res).toBeTruthy();
  });
});

test('Success getBrazilMovies', () => {
  return getBrazilMovies().then(res => {
    expect(res).toBeTruthy();
  });
});

test('Success getUsaMovies', () => {
  return getUsaMovies().then(res => {
    expect(res).toBeTruthy();
  });
});
