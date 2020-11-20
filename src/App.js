import React, { Component } from "react";
import { connect } from "react-redux";

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
        <MovieContext.Provider
          value={{
            searchValue: this.state.searchWord,
            handleSearch: this.handleSearch,
            handleResetList: this.handleResetList,
          }}
        >
          <MainPage />
        </MovieContext.Provider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (searchKeyword) =>
      dispatch(actions.fetchMovies(searchKeyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
