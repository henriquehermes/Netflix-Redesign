import DEFAULT from '../constants';

export const INITIAL_STATE = {
  detail: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEFAULT.SET_MOVIE: {
      return {
        ...state,
        detail: action.detail,
      };
    }
    default:
      return state;
  }
};
