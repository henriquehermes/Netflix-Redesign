import DEFAULT from '~/store/ducks/constants';

export const setMovie = detail => ({
  type: DEFAULT.SET_MOVIE,
  detail,
});
