import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// react router
import { BrowserRouter } from "react-router-dom";

// redux
import createSagaMiddleware from "redux-saga";
import { watchMovies, watchFilters, watchMovie } from "./store/sagas";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import filtersReducers from "./store/reducers/filters";
import moviesReducers from "./store/reducers/movies";
import movieReducers from "./store/reducers/movie";

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  filter: filtersReducers,
  movies: moviesReducers,
  movie: movieReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchMovies);
sagaMiddleware.run(watchFilters);
sagaMiddleware.run(watchMovie);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
