import { combineReducers } from "redux";

import movies from "./movie";

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
