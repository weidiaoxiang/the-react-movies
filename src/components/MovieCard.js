import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StarBorder from "@material-ui/icons/StarBorder";
import DateRange from "@material-ui/icons//DateRange";
import { Link } from "react-router";
import moment from "moment";

const styles = {
  genres: { minHeight: "20px" },
  noImage: { maxWidth: "500px", height: "250.4px", background: "gray" },
  overviewText: { minHeight: "56px" },
};

class MovieCard extends React.Component {
  render() {
    const { classes, movie, genres } = this.props;

    return (
      <Card className="MoviesItem">
        <CardMedia
          overlay={
            <CardHeader
              className="CardTitle"
              children={
                <div className="TitleInformation">
                  <p className="TitleInformation__rating">
                    <span className="rating__number">{movie.vote_average}</span>
                    <StarBorder color="white" className="rating__icon" />
                  </p>
                  <p className="TitleInformation__rating">
                    <span className="rating__number">
                      {moment(movie.release_date).format("DD/MM/YYYY")}
                    </span>
                    <DateRange color="white" className="rating__icon" />
                  </p>
                </div>
              }
              title={movie.original_title}
              subtitle={<div style={styles.genres}>test</div>}
            />
          }
        >
          {movie.backdrop_path ? (
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
          ) : (
            <div style={styles.noImage} />
          )}
        </CardMedia>
        <CardContent>
          <Typography component="p">{movie.overview}</Typography>
        </CardContent>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  genres: PropTypes.array,
};

export default withStyles(styles)(MovieCard);
