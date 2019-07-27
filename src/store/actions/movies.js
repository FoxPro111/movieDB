import * as actionTypes from "./actionTypes";

export const searchMoviesFailed = error => {
  return {
    type: actionTypes.SEARCH_MOVIES_FAILED,
    error
  };
};

export const searchMoviesSuccess = (data, query) => {
  return {
    type: actionTypes.SEARCH_MOVIES_SUCCESS,
    data,
    query
  };
};

export const searchMoviesStart = () => {
  return {
    type: actionTypes.SEARCH_MOVIES_START
  };
};

export const searchMovies = data => {
  return {
    type: actionTypes.SEARCH_MOVIES,
    data
  };
};

export const fetchMoreMoviesFailed = error => {
  return {
    type: actionTypes.FETCH_MORE_MOVIES_FAILED,
    error
  };
};

export const fetchMoreMoviesSuccess = data => {
  return {
    type: actionTypes.FETCH_MORE_MOVIES_SUCCESS,
    data
  };
};

export const fetchMoreMoviesStart = () => {
  return {
    type: actionTypes.FETCH_MORE_MOVIES_START
  };
};

export const fetchMoreMovies = query => {
  return {
    type: actionTypes.FETCH_MORE_MOVIES,
    query
  };
};
