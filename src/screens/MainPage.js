import React, { Fragment } from "react";

import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import * as classes from "../App.module.css";

const MainPage = ({ movies, favHandler, favMovies, removeFavMovieHandler }) => {
  console.log(movies);
  return (
    <React.Fragment>
      <Header />
      <div className={classes.appContainer}>
        <div>
          <h3 className={classes.movieHeaderText}>Movies</h3>
          <hr className={classes.hrStyle} />
          <div className={classes.movieListContainer}>
            {movies.map(({ Title, Poster, imdbID, Type, Year }) => {
              return (
                <Fragment key={imdbID}>
                  <Card
                    movieTitle={Title}
                    moviePoster={Poster}
                    favHandler={() =>
                      favHandler({
                        Title,
                        Poster,
                        imdbID,
                        Type,
                        Year,
                        isFav: true,
                      })
                    }
                  />
                </Fragment>
              );
            })}
          </div>
          {favMovies && favMovies.length ? (
            <>
              {" "}
              <h3 className={classes.movieHeaderText}>Favorite Movies</h3>
              <hr className={classes.hrStyle} />
              <div className={classes.movieListContainer}>
                {favMovies &&
                  favMovies.map(({ Title, Poster, imdbID, isFav }) => {
                    return (
                      <Fragment key={imdbID}>
                        <Card
                          movieTitle={Title}
                          moviePoster={Poster}
                          isFav={isFav}
                          removeFromFav={() => removeFavMovieHandler(imdbID)}
                        />
                      </Fragment>
                    );
                  })}
              </div>{" "}
            </>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
