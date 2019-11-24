import { combineReducers } from 'redux';
import user from './user/reducer';
import movie from './movie/reducer';

export default combineReducers({
  user,
  movie,
});
