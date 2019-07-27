import * as actionTypes from "../actions/actionTypes";

const initState = {
  loading: false,
  error: false,
  currentMovies: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_MOVIE_START: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }

    case actionTypes.SELECT_MOVIE_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case actionTypes.SELECT_MOVIE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        currentMovies: action.data
      }
    }

    default:
      return state;
  }
};

export default reducer;
