import axios from "./../../axios";
import * as actionTypes from "./actionTypes";

export const fetchGenreFailed = (error) => {
  return {
    type: actionTypes.FETCH_GENRE_FAILED,
    error
  };
}

export const fetchGenreSuccess = (data) => {
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
  return dispatch => {
    dispatch(fetchGenreStart());

    const API_KEY = 'eccaf510860d8b56fa2d331059cccd0d';

    axios.get(`genre/movie/list?api_key=${API_KEY}`)
      .then(response => {
        dispatch(fetchGenreSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchGenreFailed(error))
      })
  }
}