import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPopularMovies } from "../actions/moviesActions";
import MoviesList from "../components/MoviesList";
import CircularProgress from "@material-ui/core/CircularProgress";

class PopularMoviesContainer extends Component {
  static propTypes = {
    popfetchStatus: PropTypes.number.isRequired,
    movies: PropTypes.objectOf(PropTypes.array).isRequired,
    genres: PropTypes.objectOf(PropTypes.array).isRequired,
    getPMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPMovies();
  }

  render() {
    const { popfetchStatus, movies, genres } = this.props;
    if (popfetchStatus === 0) {
      return <CircularProgress />;
    }
    if (popfetchStatus === -1) {
      return <div>Load Failed</div>;
    }
    return <MoviesList movies={movies} genres={genres} title="Popular Movies" />;
  }
}

const mapStateToProps = state => ({
  popfetchStatus: state.movies.popfetchStatus,
  movies: state.movies.popularMovies,
  genres: state.genres.genres,
});

const mapDispatchToProps = dispatch => ({
  getPMovies: () => dispatch(getPopularMovies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMoviesContainer);
