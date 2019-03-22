import {
  GENRES_LOAD_BEGIN,
  GENRES_LOAD_SUCCESS,
  GENRES_LOAD_FAILED,
} from "../actions/genresActions";

const initialState = {
  genres: [],
  genresfetchStatus: 0, // 0 begin, 1 success, -1 failed
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENRES_LOAD_BEGIN:
      return { ...state, genresfetchStatus: 0 };
    case GENRES_LOAD_SUCCESS:
      return { ...state, genres: action.payload.genres, genresfetchStatus: 1 };
    case GENRES_LOAD_FAILED:
      return { ...state, genresfetchStatus: -1 };
    default:
      return state;
  }
}
