import api from "../api";

export const GENRES_LOAD_BEGIN = "GENRES_LOAD_BEGIN";
export const GENRES_LOAD_SUCCESS = "GENRES_LOAD_SUCCESS";
export const GENRES_LOAD_FAILED = "GENRES_LOAD_FAILED";

export const getGenres = () => dispatch => {
  dispatch({ type: GENRES_LOAD_BEGIN, payload: null });
  return api
    .getGenres()
    .then(response => {
      dispatch({
        type: GENRES_LOAD_SUCCESS,
        payload: response.data,
      });
    })
    .catch(err => dispatch({ type: GENRES_LOAD_FAILED, payload: err }));
};
