import React from "react";
import { Route, Redirect } from "react-router-dom";
import App from "./App";
import PopularMoviesContainer from "./containers/PopularMoviesContainer";
import TopMoviesContainer from "./containers/TopMoviesContainer";
import SearchResutMoviesContainer from "./containers/SearchResutMoviesContainer";
import MovieDetailContainer from "./containers/MovieDetailContainer";

const Routes = () => (
  <App>
    <Redirect from="/" to="/popular" />
    <Route path="/popular" component={PopularMoviesContainer} />
    <Route path="/top" component={TopMoviesContainer} />
    <Route path="/search/:query" component={SearchResutMoviesContainer} />
    <Route path="/movie/:movieId" component={MovieDetailContainer} />
  </App>
);

export default Routes;
