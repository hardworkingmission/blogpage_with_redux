import { ALLBLOGPOSTS, SEARCH } from './actionTypes';
import { initialState } from './initialState';

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLBLOGPOSTS:
      return {
        ...state,
        posts: [...action?.payload],
      };
    case SEARCH:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};
