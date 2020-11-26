import * as actionTypes from "../actionTypes";
import axios from "../../axios";

export const fetchMovies = (searchWord = "Jurassic") => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoviesStart());
      const response = await axios.get(searchWord);
      console.log(response.data);

      const { Response } = response.data;
      if (Response === "False") {
        dispatch(fetchMoviesError(response.data.Error));
      } else {
        dispatch(fetchMoviesSuccess(response.data.Search));
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchMoviesError());
    }
  };
};

export const fetchMoviesStart = () => {
  return {
    type: actionTypes.FETCH_MOVIES_START,
  };
};

export const fetchMoviesSuccess = (data) => {
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: data,
  };
};

export const fetchMoviesError = (errorMessage = "Some error occurred") => {
  console.log(errorMessage);
  return {
    type: actionTypes.FETCH_MOVIES_ERROR,
    payload: errorMessage,
  };
};

export const saveFavMovie = (movie) => {
  return {
    type: actionTypes.SAVE_FAV_MOVIE,
    payload: movie,
  };
};

export const removeFavMovie = (imdbID) => {
  return {
    type: actionTypes.REMOVE_FAV_MOVIE,
    payload: imdbID,
  };
};
