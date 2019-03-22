import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPopularMovies } from "../actions/moviesActions";
import MoviesList from "../components/MoviesList";

class PopularMoviesContainer extends Component {
  static propTypes = {
    movies: PropTypes.objectOf(PropTypes.array).isRequired,
    genres: PropTypes.objectOf(PropTypes.array).isRequired,
    getPMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPMovies();
  }

  render() {
    return (
      <MoviesList movies={this.props.movies} genres={this.props.genres} title="Popular Movies" />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.popularMovies,
  genres: state.genres.genres,
});

const mapDispatchToProps = dispatch => ({
  getPMovies: nextPage => dispatch(getPopularMovies(nextPage)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMoviesContainer);
