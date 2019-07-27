import axios from "./../../axios";
import * as actions from "../actions/index";
import { put } from "redux-saga/effects";

export function* fetchMoreMoviesSaga(action) {
  yield put(actions.fetchMoreMoviesStart());

  try {
    let url = `discover/movie?${action.query.join("&")}`;
    const response = yield axios.get(url);
    yield put(actions.fetchMoreMoviesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchMoreMoviesFailed(error));
  }
}

export function* searchMoviesSaga(action) {
  yield put(actions.searchMoviesStart());

  const query = [];
  const today = new Date();

  query.push("api_key=eccaf510860d8b56fa2d331059cccd0d");
  query.push("sort_by=release_date.desc");
  query.push(
    `primary_release_date.lte=${today.getFullYear()}-${today.getMonth() +
      1}-${today.getDate()}`
  );

  if (action.data.search) {
    query.push(`with_keywords=${action.data.search}`);
  }

  if (action.data.genres.length) {
    query.push(`with_genres=${action.data.genres.join(",")}`);
  }

  if (action.data.rating) {
    query.push(`vote_average.gte=${action.data.rating.min}`);
    query.push(`vote_average.lte=${action.data.rating.max}`);
  }

  if (action.data.years) {
    query.push(`release_date.gte=${action.data.years.min}-1-1`);
    query.push(`release_date.lte=${action.data.years.max}-12-30`);
  }

  let url = `discover/movie?${query.join("&")}`;

  try {
    const response = yield axios.get(url);
    yield put(actions.searchMoviesSuccess(response.data, query));
  } catch (error) {
    yield put(actions.searchMoviesFailed(error));
  }
}
