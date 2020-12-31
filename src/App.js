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
      pageCount: 1,
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchFavMovies();
  }

  handleSearch = (searchKeyword) => {
    this.setState({
      searchWord: searchKeyword,
      pageCount: 1,
    });
    if (searchKeyword && searchKeyword.trim().length) {
      this.props.fetchMovies(searchKeyword.trim(), 1);
    }
  };

  handleResetList = () => {
    this.props.fetchMovies();
  };

  handlePageCount = () => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          pageCount: prevState.pageCount + 1,
        };
      },
      () => this.loadMoreMovies()
    );
  };

  loadMoreMovies = () => {
    console.log(this.state.pageCount);
    this.props.loadMoreMovies(
      this.state.searchWord.trim() || "Jurassic",
      this.state.pageCount
    );
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
            pageCountHandler={this.handlePageCount}
            showLoadMore={this.props.showLoadMore}
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
    showLoadMore: state.movies.isLoadMore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchKeyword, pageCount) =>
      dispatch(actions.fetchMovies(searchKeyword, pageCount)),
    loadMoreMovies: (searchKeyword, pageCount) =>
      dispatch(actions.loadMoreMovies(searchKeyword, pageCount)),
    fetchFavMovies: () => dispatch(actions.fetchFavMovieList()),
    favHandler: (movie) => dispatch(actions.saveFavMovie(movie)),
    removeFavMovieHandler: (imdbID) => dispatch(actions.removeFavMovie(imdbID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
