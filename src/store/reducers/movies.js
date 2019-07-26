import * as actionTypes from "../actions/actionTypes";

const initState = {
  movies: [],
  page: 0,
  total_pages: 0,
  loading: false,
  error: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES_START: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case actionTypes.SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.data.results,
        page: action.data.page,
        total_pages: action.data.total_pages,
        loading: false,
        error: false
      };
    }

    case actionTypes.SEARCH_MOVIES_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default:
      return state;
  }
};

export default reducer;
