import React from "react";

import Header from "../components/Header/Header";
import * as classes from "../App.module.css";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={classes.appContainer}>
        <div>
          <h3 className={classes.movieHeaderText}>Movies</h3>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
