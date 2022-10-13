import { combineReducers } from 'redux';
import { postReducer } from './posts/postReducer';
import { filterReducer } from './filters/filterReducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  filters: filterReducer,
});
