import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchMovies } from "../actions/moviesActions";
import MoviesList from "../components/MoviesList";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";

class SearchResutMoviesContainer extends Component {
  static propTypes = {
    fetchStatus: PropTypes.number.isRequired,
    movies: PropTypes.objectOf(PropTypes.array).isRequired,
    genres: PropTypes.objectOf(PropTypes.array).isRequired,
    sMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: { params },
      sMovies,
    } = this.props;
    sMovies(params.query);
  }

  render() {
    const { fetchStatus, movies, genres } = this.props;
    if (fetchStatus === 0) {
      return <CircularProgress />;
    }
    if (fetchStatus === -1) {
      return <div>Load Failed</div>;
    }
    return <MoviesList movies={movies} genres={genres} title="Top Rated Movies" />;
  }
}

const mapStateToProps = state => ({
  fetchStatus: state.movies.searchStatus,
  movies: state.movies.searchMovies,
  genres: state.genres.genres,
});

const mapDispatchToProps = dispatch => ({
  sMovies: keyword => dispatch(searchMovies(keyword)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchResutMoviesContainer)
);
