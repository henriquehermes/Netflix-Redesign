import React from 'react';

import { GenreView, GenreText, Grid } from './styles';

const DATA = [
  {
    name: 'Action',
  },
  {
    name: 'SuperHero',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Comedy',
  },
];

const Genre = () => {
  return (
    <Grid>
      {DATA.map(item => (
        <GenreView>
          <GenreText>{item.name}</GenreText>
        </GenreView>
      ))}
    </Grid>
  );
};

export default Genre;
