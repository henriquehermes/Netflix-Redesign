/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import MovieController from '../../src/pages/Movie/MovieController';

const fakeNavigation = jest.fn();
const store = global.mockStore({
  movie: {
    detail: {
      Title: 'Riverdale',
      Year: '2017–',
      Rated: 'TV-14',
      Released: '26 Jan 2017',
      Runtime: '45 min',
      Genre: ['Crime', 'Drama', 'Mystery', 'Romance'],
      Director: 'N/A',
      Website: '',
      Writer: 'Roberto Aguirre-Sacasa',
      Actors: 'K.J. Apa, Lili Reinhart, Camila Mendes, Cole Sprouse',
      Plot:
        'While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.',
      Language: 'English',
      Country: 'USA',
      DVD: '',
      Awards: '9 wins & 4 nominations.',
      BoxOffice: '',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxOTU0NDYtYzg2MC00YzgyLTg1YzctMDc1MGJmOGIzMTc3XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
      Production: '',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.2/10' }],
      Metascore: 'N/A',
      imdbRating: '7.2',
      imdbVotes: '96,489',
      imdbID: 'tt5420376',
      Type: 'series',
      totalSeasons: '4',
      trailerURL: 'HxtLlByaYTc',
    },
  },
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MovieController navigation={fakeNavigation} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
