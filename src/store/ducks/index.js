import { combineReducers } from 'redux';
import user from './user/reducer';
import movie from './movie/reducer';
import category from './category/reducer';

export default combineReducers({
  user,
  movie,
  category,
});
