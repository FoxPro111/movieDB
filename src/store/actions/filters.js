import * as actionTypes from "./actionTypes";

export const fetchGenreFailed = error => {
  return {
    type: actionTypes.FETCH_GENRE_FAILED,
    error
  };
};

export const fetchGenreSuccess = data => {
  return {
    type: actionTypes.FETCH_GENRE_SUCCESS,
    data
  };
};

export const fetchGenreStart = () => {
  return {
    type: actionTypes.FETCH_GENRE_START
  };
};

export const fetchGenre = () => {
  return {
    type: actionTypes.FETCH_GENRE
  };
};
