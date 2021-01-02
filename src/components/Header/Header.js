import React from "react";
import { Navbar, Form, FormControl } from "react-bootstrap";

import * as classes from "./Header.module.css";
import MovieContext from "../../context/movie";

const Header = () => {
  return (
    <MovieContext.Consumer>
      {({ searchValue, handleSearch, handleResetList }) => (
        <>
          <Navbar bg="dark" variant="dark" className={classes.header}>
            <Navbar.Brand
              className={classes.headerAppName}
              onClick={handleResetList}
            >
              FavMovies
            </Navbar.Brand>
            <Form inline className={classes.searchInput}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Form>
          </Navbar>
        </>
      )}
    </MovieContext.Consumer>
  );
};

export default Header;
