/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import ProfileController from '../../src/pages/Profile/ProfileController';

const fakeLoginInApp = jest.fn();
const store = global.mockStore({
  movie: {
    detail: {},
  },
});
const fakeUser = {
  name: 'Marcela Camila Analu Mendes',
  email: 'marcela@email.com',
  picture:
    'https://i2.wp.com/cenaum.com/wp-content/uploads/2017/12/1_5ik6eH1kSnCVfYqxuXk4ew.jpeg?fit=1280%2C720',
  movieList: [
    {
      Title: 'The Fast and the Furious',
      Year: '2001',
      Rated: 'PG-13',
      Released: '22 Jun 2001',
      Runtime: '106 min',
      Genre: ['Action', 'Crime', 'Thriller'],
      Director: 'Rob Cohen',
      Writer:
        'Ken Li (magazine article "Racer X"), Gary Scott Thompson (screen story), Gary Scott Thompson (screenplay), Erik Bergquist (screenplay), David Ayer (screenplay)',
      Actors: 'Paul Walker, Vin Diesel, Michelle Rodriguez, Jordana Brewster',
      Plot:
        "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
      Language: 'English, Spanish',
      Country: 'USA, Germany',
      Awards: '11 wins & 12 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '6.8/10' },
        { Source: 'Rotten Tomatoes', Value: '53%' },
        { Source: 'Metacritic', Value: '58/100' },
      ],
      Metascore: '58',
      imdbRating: '6.8',
      imdbVotes: '327,163',
      imdbID: 'tt0232500',
      Type: 'Movie - Action',
      DVD: '01 Jan 2002',
      BoxOffice: '$142,542,950',
      Production: 'Universal Pictures',
      Website: 'N/A',
      trailerURL: '2TAOizOnNPo',
    },

    {
      Title: 'Star Wars: Episode IV - A New Hope',
      Year: '1977',
      Rated: 'PG',
      Released: '25 May 1977',
      Runtime: '121 min',
      Genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      Director: 'George Lucas',
      Writer: 'George Lucas',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
      Plot:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      Language: 'English',
      Country: 'USA',
      Awards: 'Won 6 Oscars. Another 50 wins & 28 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.6/10' },
        { Source: 'Rotten Tomatoes', Value: '93%' },
        { Source: 'Metacritic', Value: '90/100' },
      ],
      Metascore: '90',
      imdbRating: '8.6',
      imdbVotes: '1,143,909',
      imdbID: 'tt0076759',
      Type: 'movie',
      DVD: '21 Sep 2004',
      BoxOffice: 'N/A',
      Production: '20th Century Fox',
      Website: 'N/A',
      trailerURL: 'vZ734NWnAHA',
    },

    {
      Title: 'Sons of Anarchy',
      Year: '2008–2014',
      Rated: 'TV-MA',
      Released: '03 Sep 2008',
      Runtime: '45 min',
      Genre: ['Crime', 'Drama', 'Thriller'],
      Director: 'N/A',
      Writer: 'Kurt Sutter',
      Actors: 'Charlie Hunnam, Katey Sagal, Mark Boone Junior, Kim Coates',
      Plot:
        'A biker struggles to balance being a father and being involved in an outlaw motorcycle club.',
      Language: 'English',
      Country: 'USA',
      Awards: 'Won 1 Golden Globe. Another 10 wins & 55 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '8.6/10' }],
      Metascore: 'N/A',
      imdbRating: '8.6',
      imdbVotes: '236,312',
      imdbID: 'tt1124373',
      Type: 'series',
      totalSeasons: '7',
      trailerURL: '_03DBXL3Srw',
    },

    {
      Title: 'House',
      Year: '2004–2012',
      Rated: 'TV-14',
      Released: '16 Nov 2004',
      Runtime: '44 min',
      Genre: ['Drama', 'Mystery'],
      Director: 'N/A',
      Writer: 'David Shore',
      Actors: 'Hugh Laurie, Omar Epps, Robert Sean Leonard, Jesse Spencer',
      Plot:
        'An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.',
      Language: 'English',
      Country: 'USA',
      Awards: 'Won 2 Golden Globes. Another 54 wins & 131 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '8.7/10' }],
      Metascore: 'N/A',
      imdbRating: '8.7',
      imdbVotes: '385,806',
      imdbID: 'tt0412142',
      Type: 'series',
      totalSeasons: '8',
      trailerURL: 'MczMB8nU1sY',
    },
    {
      Title: 'Doctor Strange',
      Year: '2016',
      Rated: 'PG-13',
      Released: '04 Nov 2016',
      Runtime: '115 min',
      Genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
      Director: 'Scott Derrickson',
      Writer:
        'Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)',
      Actors:
        'Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong',
      Plot:
        'While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.',
      Language: 'English',
      Country: 'USA',
      Awards: 'Nominated for 1 Oscar. Another 20 wins & 64 nominations.',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '7.5/10' },
        { Source: 'Rotten Tomatoes', Value: '89%' },
        { Source: 'Metacritic', Value: '72/100' },
      ],
      Metascore: '72',
      imdbRating: '7.5',
      imdbVotes: '538,895',
      imdbID: 'tt1211837',
      Type: 'movie',
      DVD: '28 Feb 2017',
      BoxOffice: '$232,630,718',
      Production: 'Walt Disney Pictures',
      Website: 'N/A',
      trailerURL: 'Lt-U_t2pUHI',
    },
  ],
};

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ProfileController navigation={fakeLoginInApp} data={fakeUser} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
