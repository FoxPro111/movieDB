import { put } from "redux-saga/effects";
import * as actions from "../actions/index";
import axios from "./../../axios";

export function* fetchGenreSaga() {
  yield put(actions.fetchGenreStart());

  const API_KEY = "eccaf510860d8b56fa2d331059cccd0d";

  try {
    const response = yield axios.get(`genre/movie/list?api_key=${API_KEY}`);
    yield put(actions.fetchGenreSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchGenreFailed(error));
  }
}
