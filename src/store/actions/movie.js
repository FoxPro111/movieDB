import * as actionTypes from "./actionTypes";

export const selectMovieStart = () => {
  return {
    type: actionTypes.SELECT_MOVIE_START
  };
};

export const selectMovieFailed = error => {
  return {
    type: actionTypes.SELECT_MOVIE_FAILED,
    error
  };
};

export const selectMovieSuccess = data => {
  return {
    type: actionTypes.SELECT_MOVIE_SUCCESS,
    data
  };
};

export const selectMovieRemove = () => {
  return {
    type: actionTypes.SELECT_MOVIE_REMOVE
  };
};

export const selectMovie = id => {
  return {
    type: actionTypes.SELECT_MOVIE,
    id
  };
};
