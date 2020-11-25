import React, { Fragment } from "react";

import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import * as classes from "../App.module.css";

const MainPage = ({ movies }) => {
  console.log(movies);
  return (
    <React.Fragment>
      <Header />
      <div className={classes.appContainer}>
        <div>
          <h3 className={classes.movieHeaderText}>Movies</h3>
          <hr className={classes.hrStyle} />
          <div className={classes.movieListContainer}>
            {movies.map(({ Title, Poster, imdbID }) => {
              return (
                <Fragment key={imdbID}>
                  <Card movieTitle={Title} moviePoster={Poster} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
