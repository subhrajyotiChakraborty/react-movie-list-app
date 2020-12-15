import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: false,
  movies: [],
  message: "",
  favMovies: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_START:
    case actionTypes.SAVE_FAV_MOVIE_START:
    case actionTypes.REMOVE_FAV_MOVIE_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        msg: "",
        movies: action.payload,
      };

    case actionTypes.SAVE_FAV_MOVIE_LIST:
      return {
        ...state,
        favMovies: [...state.favMovies, ...action.payload],
      };

    case actionTypes.SAVE_FAV_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        favMovies: [...state.favMovies, action.payload],
      };

    case actionTypes.SAVE_FAV_MOVIE_ERROR:
    case actionTypes.REMOVE_FAV_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.REMOVE_FAV_MOVIE_SUCCESS:
      const updatedFavMovieList = state.favMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      if (updatedFavMovieList) {
        return {
          ...state,
          loading: false,
          favMovies: updatedFavMovieList,
        };
      }
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
