import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import StarBorder from "@material-ui/icons/StarBorder";
import { compose } from "ramda";
import { withRouter } from "react-router-dom";

export const findGenres = (movie, genres = []) => {
  if (movie.genre_ids && genres.length > 0) {
    const { genre_ids } = movie;
    const moviesGenres = [];
    genre_ids.forEach(genre_id => {
      const movieGenre = genres.find(genre => genre.id === genre_id);
      if (movieGenre) {
        moviesGenres.push(movieGenre);
      }
    });
    return moviesGenres;
  }
  return [];
};

const styles = theme => ({
  root: {
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

const HeaderTitle = ({ movie, classes }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm container>
        <Typography gutterBottom variant="subtitle1" className={classes.title}>
          {movie.original_title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.title}>{movie.vote_average}</Typography>
      </Grid>
      <Grid item>
        <StarBorder color="white" className="rating__icon" />
      </Grid>
    </Grid>
  );
};

HeaderTitle.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};

const HeaderSubTitle = ({ genres = [], classes }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm container>
        <Typography className={classes.title}>
          {genres.reduce((totalG, currentG) => `${totalG} ${currentG.name}`, "")}
        </Typography>
      </Grid>
    </Grid>
  );
};

HeaderSubTitle.propTypes = {
  genres: PropTypes.objectOf(PropTypes.array).isRequired,
};

const getGridListCols = width => {
  if (isWidthUp("xl", width)) {
    return 4;
  }

  if (isWidthUp("lg", width)) {
    return 3;
  }

  if (isWidthUp("md", width)) {
    return 2;
  }

  return 1;
};

class MoviesList extends Component {
  onTileTouch = id => {
    const { history } = this.props;
    history.push(`/movie/${id}`);
  };

  render() {
    const { classes, movies, genres, width } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight="auto" spacing={30} cols={getGridListCols(width)}>
          {movies.map(movie => (
            <GridListTile
              key={movie.id}
              onClick={e => {
                e.preventDefault();
                this.onTileTouch(movie.id);
              }}
            >
              {movie.backdrop_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
              ) : (
                <div style={styles.noImage} />
              )}
              <GridListTileBar
                title={<HeaderTitle movie={movie} classes={classes} />}
                subtitle={<HeaderSubTitle genres={genres} classes={classes} />}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

MoviesList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  movies: PropTypes.objectOf(PropTypes.object).isRequired,
  genres: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
  withWidth()
)(MoviesList);
