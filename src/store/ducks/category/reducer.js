import DEFAULT from '../constants';

export const INITIAL_STATE = {
  typeCategory: {},
  data: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEFAULT.SET_CATEGORY: {
      return {
        ...state,
        typeCategory: action.typeCategory,
        data: action.data,
      };
    }
    default:
      return state;
  }
};
