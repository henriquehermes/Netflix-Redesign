import DEFAULT from '~/store/ducks/constants';

export const setCategory = (typeCategory, data) => ({
  type: DEFAULT.SET_CATEGORY,
  typeCategory,
  data,
});
