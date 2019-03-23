import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import genresReducer from "./genresReducer";
import movieReucer from "./movieReducer";

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  movie: movieReucer,
});
