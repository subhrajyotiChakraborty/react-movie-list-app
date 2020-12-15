import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import TopBarProgress from "react-topbar-progress-indicator";

import MainPage from "./screens/MainPage";
import * as classes from "./App.module.css";
import * as actions from "./store/actions";
import MovieContext from "./context/movie";

TopBarProgress.config({
  barColors: {
    0: "#4cd964",
    0.5: "#26a52a",
    "1.0": "#026d05",
  },
  shadowBlur: 5,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: "",
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchFavMovies();
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
        {this.props.loading && <TopBarProgress />}
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
    loading: state.movies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchKeyword) =>
      dispatch(actions.fetchMovies(searchKeyword)),
    fetchFavMovies: () => dispatch(actions.fetchFavMovieList()),
    favHandler: (movie) => dispatch(actions.saveFavMovie(movie)),
    removeFavMovieHandler: (imdbID) => dispatch(actions.removeFavMovie(imdbID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
