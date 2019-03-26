import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import StarBorder from "@material-ui/icons/StarBorder";
import moment from "moment";

const styles = theme => ({
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
});

const HeaderTitle = ({ movie, classes }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} sm container>
        <Typography gutterBottom variant="subtitle1">
          {movie.original_title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>{movie.vote_average}</Typography>
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
        <Typography>
          {genres.reduce((totalG, currentG) => `${totalG} ${currentG.name}`, "")}
        </Typography>
      </Grid>
    </Grid>
  );
};

HeaderSubTitle.propTypes = {
  genres: PropTypes.objectOf(PropTypes.array).isRequired,
};

const MovieCard = props => {
  const { classes, movie, genres } = props;

  return (
    <Card>
      <CardHeader
        data-testid="movie-header"
        title={<HeaderTitle movie={movie} classes={classes} />}
        subheader={<HeaderSubTitle genres={genres} classes={classes} />}
      />
      <CardMedia
        data-testid="movie-media"
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        title={movie.original_title}
      />
      <CardContent data-testid="movie-content">
        <Typography component="p">{movie.overview}</Typography>
        <Typography component="p">{movie.overview}</Typography>
        <div>
          <div>
            <b>Status:</b> {movie.status}
          </div>
          <div>
            <b>Release date:</b> {moment(movie.release_date).format("DD/MM/YYYY")}
          </div>
          <div>
            <b>Duration:</b> {movie.runtime} min.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

MovieCard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
  genres: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default withStyles(styles)(MovieCard);
