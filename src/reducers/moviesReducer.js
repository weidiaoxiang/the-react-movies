import {
  POPULAR_LOAD_BEGIN,
  POPULAR_LOAD_SUCCESS,
  POPULAR_LOAD_FAILED,
  TOP_LOAD_BEGIN,
  TOP_LOAD_SUCCESS,
  TOP_LOAD_FAILED,
  SEARCH_LOAD_BEGIN,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAILED,
} from "../actions/moviesActions";

const initialState = {
  popularMovies: [],
  popfetchStatus: 0, // 0 begin, 1 success, -1 failed
  topMovies: [],
  topfetchStatus: 0,
  searchMovies: [],
  searchStatus: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POPULAR_LOAD_BEGIN:
      return { ...state, popfetchStatus: 0 };
    case POPULAR_LOAD_SUCCESS:
      return { ...state, popfetchStatus: 1 };
    case POPULAR_LOAD_FAILED:
      return { ...state, popfetchStatus: -1 };
    case TOP_LOAD_BEGIN:
      return { ...state, topfetchStatus: 0 };
    case TOP_LOAD_SUCCESS:
      return { ...state, topfetchStatus: 1 };
    case TOP_LOAD_FAILED:
      return { ...state, topfetchStatus: -1 };
    case SEARCH_LOAD_BEGIN:
      return { ...state, searchStatus: 0 };
    case SEARCH_LOAD_SUCCESS:
      return { ...state, searchStatus: 1 };
    case SEARCH_LOAD_FAILED:
      return { ...state, searchStatus: -1 };
    default:
      return state;
  }
}
