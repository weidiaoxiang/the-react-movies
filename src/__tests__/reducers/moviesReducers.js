import reducer from "../../reducers/moviesReducer";
import {
  POPULAR_LOAD_BEGIN,
  POPULAR_LOAD_SUCCESS,
  TOP_LOAD_BEGIN,
  TOP_LOAD_SUCCESS,
  SEARCH_LOAD_BEGIN,
  SEARCH_LOAD_SUCCESS,
} from "../../actions/moviesActions";

const initialState = {
  popularMovies: [],
  popfetchStatus: 0, // 0 begin, 1 success, -1 failed
  topMovies: [],
  topfetchStatus: 0,
  searchMovies: [],
  searchStatus: 0,
};

describe("moviews reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("popular moviews loaded", () => {
    const mockPMovies = require("../../mock_data/popular_movies.json");

    expect(
      reducer(initialState, {
        type: POPULAR_LOAD_SUCCESS,
        payload: mockPMovies,
      })
    ).toEqual({
      popularMovies: mockPMovies.results,
      popfetchStatus: 1,
      topMovies: [],
      topfetchStatus: 0,
      searchMovies: [],
      searchStatus: 0,
    });
  });
});
