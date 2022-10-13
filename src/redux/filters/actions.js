import { FILTERBYAUTHOR, FILTERBYCATEGORY } from './actionTypes';

export const postsFilteredByAuthor = (payload) => {
  return {
    type: FILTERBYAUTHOR,
    payload,
  };
};
export const postsFilteredByCategory = (payload) => {
  return {
    type: FILTERBYCATEGORY,
    payload,
  };
};
