import axios from "./../../axios";
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
  return dispatch => {
    dispatch(selectMovieStart());

    let url = `/movie/${id}?api_key=eccaf510860d8b56fa2d331059cccd0d`;

    axios
      .get(url)
      .then(response => {
        dispatch(selectMovieSuccess(response.data));
      })
      .catch(error => {
        dispatch(selectMovieFailed(error));
      });
  };
};
