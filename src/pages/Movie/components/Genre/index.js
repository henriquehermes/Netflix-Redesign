import React from 'react';

import { GenreView, GenreText, Grid } from './styles';

const Genre = ({ data }) => {
  return (
    <Grid>
      {data.map(item => (
        <GenreView>
          <GenreText>{item}</GenreText>
        </GenreView>
      ))}
    </Grid>
  );
};

export default Genre;
