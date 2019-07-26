import * as actionTypes from '../actions/actionTypes';

const initState = {
  genres: []
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_GENRE: {
      console.log('FETCH_GENRE')
      return {
        ...state
      }
    }

    case actionTypes.FETCH_GENRE_START: {
      console.log('FETCH_GENRE_START')
      return {
        ...state
      }
    }

    case actionTypes.FETCH_GENRE_SUCCESS: {
      return {
        ...state,
        genres: action.data.genres
      }
    }

    case actionTypes.FETCH_GENRE_FAILED: {
      console.log('FETCH_GENRE_FAILED')
      return {
        ...state
      }
    }

    default: return state;
  }
}

export default reducer;