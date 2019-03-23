import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTopMovies } from "../actions/moviesActions";
import MoviesList from "../components/MoviesList";
import CircularProgress from "@material-ui/core/CircularProgress";

class SearchResutMoviesContainer extends Component {
  static propTypes = {
    fetchStatus: PropTypes.number.isRequired,
    movies: PropTypes.objectOf(PropTypes.array).isRequired,
    genres: PropTypes.objectOf(PropTypes.array).isRequired,
    getTMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTMovies();
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
  getTMovies: () => dispatch(getTopMovies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResutMoviesContainer);
