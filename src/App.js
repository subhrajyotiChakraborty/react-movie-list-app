import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import MainPage from "./screens/MainPage";
import * as classes from "./App.module.css";
import * as actions from "./store/actions";
import MovieContext from "./context/movie";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handleSearch = (searchKeyword) => {
    this.setState({
      searchWord: searchKeyword,
    });
    if (searchKeyword && searchKeyword.trim().length) {
      this.props.fetchMovies(searchKeyword.trim());
    }
  };

  handleResetList = () => {
    this.props.fetchMovies();
  };

  render() {
    return (
      <div className={classes.appContainer}>
        <ToastContainer />
        <MovieContext.Provider
          value={{
            searchValue: this.state.searchWord,
            handleSearch: this.handleSearch,
            handleResetList: this.handleResetList,
          }}
        >
          <MainPage
            movies={this.props.movies}
            favHandler={this.props.favHandler}
            favMovies={this.props.favMovies}
            removeFavMovieHandler={this.props.removeFavMovieHandler}
          />
        </MovieContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    favMovies: state.movies.favMovies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchKeyword) =>
      dispatch(actions.fetchMovies(searchKeyword)),
    favHandler: (movie) => dispatch(actions.saveFavMovie(movie)),
    removeFavMovieHandler: (imdbID) => dispatch(actions.removeFavMovie(imdbID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
