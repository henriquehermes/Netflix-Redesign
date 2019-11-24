import { combineReducers } from 'redux';

import movie from './movie/reducer';
import category from './category/reducer';

export default combineReducers({
  movie,
  category,
});
