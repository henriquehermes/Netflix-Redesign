import * as actionsCategory from '../../src/store/ducks/category/actions';
import * as actionsMovie from '../../src/store/ducks/movie/actions';

import DEFAULT from '../../src/store/ducks/constants';

const fakeCategory = 'Crime';
const fakedata = [];

describe('actions', () => {
  it('should create an action to setcategory', () => {
    const expectedAction = {
      type: DEFAULT.SET_CATEGORY,
      typeCategory: fakeCategory,
      data: fakedata,
    };
    expect(actionsCategory.setCategory(fakeCategory, fakedata)).toEqual(
      expectedAction,
    );
  });
  it('should create an action to setmovie', () => {
    const expectedAction = {
      type: DEFAULT.SET_MOVIE,
      detail: fakedata,
    };
    expect(actionsMovie.setMovie(fakedata)).toEqual(expectedAction);
  });
});
