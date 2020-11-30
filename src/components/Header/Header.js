import React from "react";

import * as classes from "./Header.module.css";
import MovieContext from "../../context/movie";

const Header = () => {
  return (
    <MovieContext.Consumer>
      {({ searchValue, handleSearch, handleResetList }) => (
        <header className={classes.header}>
          <h2 onClick={handleResetList} className={classes.headerAppName}>
            FavMovies
          </h2>
          <input
            placeholder="Search Movies"
            className={classes.searchInput}
            type="text"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </header>
      )}
    </MovieContext.Consumer>
  );
};

export default Header;
