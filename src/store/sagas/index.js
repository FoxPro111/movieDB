import { takeEvery } from "redux-saga/effects";

import { fetchMoreMoviesSaga, searchMoviesSaga } from "./movies";
import { fetchGenreSaga } from "./filters";
import { selectMovieSaga } from "./movie";

import * as actionTypes from "../actions/actionTypes";

export function* watchMovies() {
  yield takeEvery(actionTypes.FETCH_MORE_MOVIES, fetchMoreMoviesSaga);
  yield takeEvery(actionTypes.SEARCH_MOVIES, searchMoviesSaga);
}

export function* watchFilters() {
  yield takeEvery(actionTypes.FETCH_GENRE, fetchGenreSaga);
}

export function* watchMovie() {
  yield takeEvery(actionTypes.SELECT_MOVIE, selectMovieSaga);
}
