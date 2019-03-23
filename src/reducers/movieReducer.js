import { MOVIE_LOAD_BEGIN, MOVIE_LOAD_SUCCESS, MOVIE_LOAD_FAILED } from "../actions/movieActions";

const initialState = {
  movieItems: {},
  fetchStatus: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVIE_LOAD_BEGIN:
      return { ...state, fetchStatus: 0 };
    case MOVIE_LOAD_SUCCESS: {
      return {
        ...state,
        movieItems: { ...state.movieItems, [action.payload.id]: action.payload },
        fetchStatus: 1,
      };
    }
    case MOVIE_LOAD_FAILED:
      return { ...state, fetchStatus: -1 };
    default:
      return state;
  }
}
