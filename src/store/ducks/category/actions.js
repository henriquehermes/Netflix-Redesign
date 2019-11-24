import DEFAULT from '~/store/ducks/constants';

export const setMovie = (typeCategory, data) => ({
  type: DEFAULT.SET_CATEGORY,
  typeCategory,
  data,
});
