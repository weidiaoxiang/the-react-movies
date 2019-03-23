import api from "../api";

export const MOVIE_LOAD_BEGIN = "MOVIE_LOAD_BEGIN";
export const MOVIE_LOAD_SUCCESS = "MOVIE_LOAD_SUCCESS";
export const MOVIE_LOAD_FAILED = "MOVIE_LOAD_FAILED";

export const getMovieById = id => dispatch => {
  dispatch({ type: MOVIE_LOAD_BEGIN, payload: null });
  return api
    .getMovieById(id)
    .then(response => {
      dispatch({
        type: MOVIE_LOAD_SUCCESS,
        payload: response.data,
      });
    })
    .catch(err => dispatch({ type: MOVIE_LOAD_FAILED, payload: err }));
};
