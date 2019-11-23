import DEFAULT from '../constants';

export const INITIAL_STATE = {
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEFAULT.SET_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};
