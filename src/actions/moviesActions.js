import api from "../api";

export const POPULAR_LOAD_BEGIN = "POPULAR_LOAD_BEGIN";
export const POPULAR_LOAD_SUCCESS = "POPULAR_LOAD_SUCCESS";
export const POPULAR_LOAD_FAILED = "POPULAR_LOAD_FAILED";

export const TOP_LOAD_BEGIN = "TOP_LOAD_BEGIN";
export const TOP_LOAD_SUCCESS = "TOP_LOAD_SUCCESS";
export const TOP_LOAD_FAILED = "TOP_LOAD_FAILED";

export const SEARCH_LOAD_BEGIN = "SEARCH_LOAD_BEGIN";
export const SEARCH_LOAD_SUCCESS = "SEARCH_LOAD_SUCCESS";
export const SEARCH_LOAD_FAILED = "SEARCH_LOAD_FAILED";

const getPopularMoviews = () => dispatch => {
  dispatch({ type: POPULAR_LOAD_BEGIN, payload: null });
  return api
    .getPopularMoviews()
    .then(response => {
      dispatch({
        type: POPULAR_LOAD_SUCCESS,
        payload: response.body,
      });
    })
    .catch(err => dispatch({ type: POPULAR_LOAD_FAILED, payload: err }));
};
