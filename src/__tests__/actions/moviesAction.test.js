import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  POPULAR_LOAD_BEGIN,
  POPULAR_LOAD_SUCCESS,
  TOP_LOAD_BEGIN,
  TOP_LOAD_SUCCESS,
  SEARCH_LOAD_BEGIN,
  SEARCH_LOAD_SUCCESS,
  getPopularMovies,
  getTopMovies,
  searchMovies,
} from "../../actions/moviesActions";

const initialState = {
  popularMovies: [],
  popfetchStatus: 0, // 0 begin, 1 success, -1 failed
  topMovies: [],
  topfetchStatus: 0,
  searchMovies: [],
  searchStatus: 0,
};

describe("action load movies for popular, top, search", () => {
  let store;
  beforeAll(() => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    store = mockStore(initialState);
  });

  it("action load moviews for popular", () => {
    const mockPMovies = require("../../mock_data/popular_movies.json");
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockPMovies }));
    const expectedActions = [
      { type: POPULAR_LOAD_BEGIN, payload: null },
      { type: POPULAR_LOAD_SUCCESS, payload: mockPMovies },
    ];
    store.dispatch(getPopularMovies()).then(() => {
      // return of async actions
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("action load moviews for top", () => {
    const mockTMovies = require("../../mock_data/top_movies.json");
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockTMovies }));
    const expectedActions = [
      { type: TOP_LOAD_BEGIN, payload: null },
      { type: TOP_LOAD_SUCCESS, payload: mockTMovies },
    ];
    store.dispatch(getTopMovies()).then(() => {
      // return of async actions
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("action load moviews for search", () => {
    const mockSMovies = require("../../mock_data/search_movies.json");
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mockSMovies }));
    const expectedActions = [
      { type: SEARCH_LOAD_BEGIN, payload: null },
      { type: SEARCH_LOAD_SUCCESS, payload: mockSMovies },
    ];
    store.dispatch(searchMovies()).then(() => {
      // return of async actions
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
