import axios from "./../../axios";
import * as actionTypes from "./actionTypes";

export const searchMoviesFailed = error => {
  return {
    type: actionTypes.SEARCH_MOVIES_FAILED,
    error
  };
};

export const searchMoviesSuccess = data => {
  return {
    type: actionTypes.SEARCH_MOVIES_SUCCESS,
    data
  };
};

export const searchMoviesStart = () => {
  return {
    type: actionTypes.SEARCH_MOVIES_START
  };
};

export const searchMovies = data => {
  return dispatch => {
    dispatch(searchMoviesStart());

    const options = [];
    const today = new Date();

    options.push("api_key=eccaf510860d8b56fa2d331059cccd0d");
    options.push("sort_by=release_date.desc");
    options.push(
      `primary_release_date.lte=${today.getFullYear()}-${today.getMonth() +
        1}-${today.getDate()}`
    );

    if (data.search) {
      options.push(`with_keywords=${data.search}`);
    }

    if (data.genres) {
      options.push(`with_genres=${data.genres.join(",")}`);
    }

    let url = `discover/movie?${options.join("&")}`;

    axios
      .get(url)
      .then(response => {
        dispatch(searchMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(searchMoviesFailed(error));
      });
  };
};
