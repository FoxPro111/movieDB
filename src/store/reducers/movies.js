import * as actionTypes from "../actions/actionTypes";

const initState = {
  movies: [],
  nextPage: 1,
  total_pages: 0,
  loading: false,
  error: false,
  searching: false,
  query: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES_START:
    case actionTypes.FETCH_MORE_MOVIES_START: {
      return {
        ...state,
        loading: true,
        error: false,
        searching: true
      };
    }

    case actionTypes.SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.data.results,
        nextPage: action.data.page + 1,
        total_pages: action.data.total_pages,
        loading: false,
        error: false,
        query: action.query
      };
    }

    case actionTypes.FETCH_MORE_MOVIES_FAILED:
    case actionTypes.SEARCH_MOVIES_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case actionTypes.FETCH_MORE_MOVIES_SUCCESS: {
      return {
        ...state,
        nextPage: action.data.page + 1,
        movies: [...state.movies].concat(action.data.results),
        loading: false,
        error: false
      };
    }

    default:
      return state;
  }
};

export default reducer;
