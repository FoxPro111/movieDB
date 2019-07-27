import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "../../axios";

export function* selectMovieSaga(action) {
  yield put(actions.searchMoviesStart());

  let url = `/movie/${action.id}?api_key=eccaf510860d8b56fa2d331059cccd0d`;

  try {
    const response = yield axios.get(url);
    yield put(actions.selectMovieSuccess(response.data));
  } catch (error) {
    yield put(actions.selectMovieFailed(error));
  }
}
