import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from "react";
import { render } from "react-testing-library";
import MovieDetail from "../../components/MovieDetail";

test("renders search bar", () => {
  const mockPMovies = require("../../mock_data/movie.json");
  const mockGenres = require("../../mock_data/genres.json");
  const { getByTestId } = render(<MovieDetail movie={mockPMovies} genres={mockGenres.genres} />);
  expect(getByTestId("movie-header")).toBeInTheDocument();
  expect(getByTestId("movie-media")).toBeInTheDocument();
  expect(getByTestId("movie-content")).toBeInTheDocument();
});
