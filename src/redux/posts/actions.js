import axios from 'axios';
import { ALLBLOGPOSTS, SEARCH } from './actionTypes';

export const fetchAllBlogPosts = () => {
  return async (dispatch) => {
    return axios
      .get('posts.json')
      .then((res) => dispatch(allBlogPosts(res.data)));
  };
};

export const allBlogPosts = (payload) => {
  return {
    type: ALLBLOGPOSTS,
    payload,
  };
};

export const search = (payload) => {
  return {
    type: SEARCH,
    payload,
  };
};
