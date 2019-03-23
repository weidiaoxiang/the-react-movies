import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTopMovies } from "../actions/moviesActions";
import MoviesList from "../components/MoviesList";
import CircularProgress from "@material-ui/core/CircularProgress";

class TopMoviesContainer extends Component {
  static propTypes = {
    topfetchStatus: PropTypes.number.isRequired,
    movies: PropTypes.objectOf(PropTypes.array).isRequired,
    genres: PropTypes.objectOf(PropTypes.array).isRequired,
    getTMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTMovies();
  }

  render() {
    const { topfetchStatus, movies, genres } = this.props;
    if (topfetchStatus === 0) {
      return <CircularProgress />;
    }
    if (topfetchStatus === -1) {
      return <div>Load Failed</div>;
    }
    return <MoviesList movies={movies} genres={genres} title="Top Rated Movies" />;
  }
}

const mapStateToProps = state => ({
  topfetchStatus: state.movies.topfetchStatus,
  movies: state.movies.topMovies,
  genres: state.genres.genres,
});

const mapDispatchToProps = dispatch => ({
  getTMovies: () => dispatch(getTopMovies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMoviesContainer);
