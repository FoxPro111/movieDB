import axios from "./../../axios";
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

    if (data.genres.length) {
      options.push(`with_genres=${data.genres.join(",")}`);
    }

    if (data.rating) {
      options.push(`vote_average.gte=${data.rating.min}`);
      options.push(`vote_average.lte=${data.rating.max}`);
    }

    if (data.years) {
      options.push(`release_date.gte=${data.years.min}-1-1`);
      options.push(`release_date.lte=${data.years.max}-12-30`);
    }

    let url = `discover/movie?${options.join("&")}`;

    axios
      .get(url)
      .then(response => {
        dispatch(searchMoviesSuccess(response.data, options));
      })
      .catch(error => {
        dispatch(searchMoviesFailed(error));
      });
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
  return dispatch => {
    dispatch(fetchMoreMoviesStart());

    let url = `discover/movie?${query.join("&")}`;
    axios
      .get(url)
      .then(response => {
        dispatch(fetchMoreMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMoreMoviesFailed(error));
      });
  };
};
