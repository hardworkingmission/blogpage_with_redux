import { FILTERBYAUTHOR, FILTERBYCATEGORY } from './actionTypes';
import { initialState } from './initialState';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERBYAUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case FILTERBYCATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
