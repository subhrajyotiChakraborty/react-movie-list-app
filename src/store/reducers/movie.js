import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: false,
  movies: [],
  message: "",
  favMovies: JSON.parse(window.localStorage.getItem("movies")),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_START:
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

    case actionTypes.SAVE_FAV_MOVIE:
      const isExists = state.favMovies.findIndex(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      console.log(isExists);
      if (isExists === -1) {
        window.localStorage.setItem(
          "movies",
          JSON.stringify([...state.favMovies, action.payload])
        );
        return {
          ...state,
          favMovies: [...state.favMovies, action.payload],
        };
      }
      return state;

    case actionTypes.REMOVE_FAV_MOVIE:
      const updatedFavMovieList = state.favMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
      if (updatedFavMovieList) {
        window.localStorage.setItem(
          "movies",
          JSON.stringify(updatedFavMovieList)
        );
        return {
          ...state,
          favMovies: updatedFavMovieList,
        };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
