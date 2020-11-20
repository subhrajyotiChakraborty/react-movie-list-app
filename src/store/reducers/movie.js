import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: false,
  movies: [],
  message: "",
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

    default:
      return state;
  }
};

export default reducer;
