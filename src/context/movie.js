import React from "react";

const MovieContext = React.createContext({
  searchValue: "",
  handleSearch: () => {},
  handleResetList: () => {},
});

export default MovieContext;
