import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { showToast } from "../../common/utils";

export const fetchMovies = (searchWord = "Jurassic", pageCount = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoviesStart());
      const response = await axios.get(
        `movies/${searchWord}?page=${pageCount}`
      );

      const { Response } = response.data;
      if (Response === "False") {
        dispatch(fetchMoviesError(response.data.Error));
      } else {
        dispatch(fetchMoviesSuccess(response.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchMoviesError());
    }
  };
};

export const loadMoreMovies = (searchWord = "Jurassic", pageCount = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMoviesStart());
      const response = await axios.get(
        `movies/${searchWord}?page=${pageCount}`
      );

      const { Response } = response.data;
      if (Response === "False") {
        dispatch(loadMoreMoviesError(response.data.Error));
      } else {
        dispatch(loadMoreMoviesSuccess(response.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(loadMoreMoviesError());
    }
  };
};

export const fetchMoviesStart = () => {
  return {
    type: actionTypes.FETCH_MOVIES_START,
  };
};

export const fetchMoviesSuccess = (data) => {
  if (data.Search.length !== Number(data.totalResults)) {
    data["loadMore"] = true;
  }
  return {
    type: actionTypes.FETCH_MOVIES_SUCCESS,
    payload: data,
  };
};

export const loadMoreMoviesSuccess = (data) => {
  return {
    type: actionTypes.LOAD_MORE_MOVIES_SUCCESS,
    payload: data,
  };
};

export const loadMoreMoviesError = () => {
  return {
    type: actionTypes.LOAD_MORE_MOVIES_FAIL,
  };
};

export const fetchMoviesError = (errorMessage = "Some error occurred") => {
  console.log(errorMessage);
  return {
    type: actionTypes.FETCH_MOVIES_ERROR,
    payload: errorMessage,
  };
};

export const fetchFavMovieList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("favorites");
      dispatch(saveFavMovieList(response.data.movies));
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveFavMovieList = (movies) => {
  return {
    type: actionTypes.SAVE_FAV_MOVIE_LIST,
    payload: movies,
  };
};

export const saveFavMovie = (movie) => {
  return async (dispatch) => {
    try {
      dispatch(saveFavMovieStart());
      const response = await axios.post("movie", movie);
      showToast(true, "Movie successfully added to your favorite list");
      dispatch(saveFavMovieSuccess(response.data));
    } catch (error) {
      console.log(error.message);
      showToast(false, "Movie already present to your favorite list");
      dispatch(saveFavMovieError());
    }
  };
};

export const saveFavMovieStart = () => {
  return {
    type: actionTypes.SAVE_FAV_MOVIE_START,
  };
};

export const saveFavMovieSuccess = (movie) => {
  return {
    type: actionTypes.SAVE_FAV_MOVIE_SUCCESS,
    payload: movie,
  };
};

export const saveFavMovieError = () => {
  return {
    type: actionTypes.SAVE_FAV_MOVIE_ERROR,
  };
};

export const removeFavMovie = (imdbID) => {
  return async (dispatch) => {
    try {
      dispatch(removeFavMovieStart());
      const response = await axios.delete(`movie/${imdbID}`);
      // console.log(response.data);
      showToast(true, response.data.message);
      dispatch(removeFavMovieSuccess(imdbID));
    } catch (error) {
      console.log(error);
      dispatch(removeFavMovieError());
    }
  };
};

export const removeFavMovieStart = () => {
  return {
    type: actionTypes.REMOVE_FAV_MOVIE_START,
  };
};

export const removeFavMovieSuccess = (imdbID) => {
  return {
    type: actionTypes.REMOVE_FAV_MOVIE_SUCCESS,
    payload: imdbID,
  };
};

export const removeFavMovieError = () => {
  return {
    type: actionTypes.REMOVE_FAV_MOVIE_ERROR,
  };
};
