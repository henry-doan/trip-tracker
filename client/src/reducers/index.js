import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import trips from './trip';

const rootReducer = combineReducers({
  user,
  trips,
  flash
});

export default rootReducer;
