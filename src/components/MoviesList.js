import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";

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
    console.log("find genres");
    console.log(moviesGenres);
    return moviesGenres;
  }
  return [];
};

const MoviesList = ({ movies, genres }) => {
  if (!movies || movies.length === 0) {
    return <h2>No movies</h2>;
  }

  return (
    <div className="MoviesList">
      <div className="MoviesGrid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} genres={findGenres(movie, genres)} />
        ))}
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.array).isRequired,
  genres: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default MoviesList;
