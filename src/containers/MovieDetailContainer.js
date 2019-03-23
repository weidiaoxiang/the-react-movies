import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import MovieCard from "../components/MovieCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getMovieById } from "../actions/movieActions";
import { compose } from "ramda";

const styles = theme => ({
  movieDetail: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  genres: { minHeight: "20px" },
  noImage: { maxWidth: "500px", height: "250.4px", background: "gray" },
  overviewText: { minHeight: "56px" },
  title: { color: "rgba(255,255,255, 0.9)" },
});

class MoviesDetailContainer extends Component {
  state = {
    movieId: -1,
  };

  static propTypes = {
    fetchStatus: PropTypes.number.isRequired,
    movieItems: PropTypes.objectOf(PropTypes.object).isRequired,
    genres: PropTypes.objectOf(PropTypes.array).isRequired,
    getMovie: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      match: { params },
      getMovie,
    } = this.props;
    this.setState({ movieId: params.movieId });
    getMovie(params.movieId);
  }

  render() {
    const { fetchStatus, movieItems, genres } = this.props;
    if (fetchStatus === 0) {
      return <CircularProgress />;
    }
    const { movieId } = this.state;
    const movie = movieItems[movieId];

    return (
      !!movie && (
        <Grid container spacing={16}>
          <Grid item xs={8} sm container>
            <MovieCard movie={movie} genres={genres} />
          </Grid>
          <Grid item xs={4} sm container />
        </Grid>
      )
    );
  }
}

const mapStateToProps = state => ({
  fetchStatus: state.movie.fetchStatus,
  movieItems: state.movie.movieItems,
  genres: state.genres.genres,
});

const mapDispatchToProps = dispatch => ({
  getMovie: movieId => dispatch(getMovieById(movieId)),
});

export default compose(
  withRouter,
  withStyles(styles),
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MoviesDetailContainer);
