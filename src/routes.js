import React from "react";
import { Route, Redirect } from "react-router-dom";
import App from "./App";
import PopularMoviesContainer from "./containers/PopularMoviesContainer";
import TopMoviesContainer from "./containers/TopMoviesContainer";

const Routes = () => (
  <App>
    <Redirect from="/" to="/popular" />
    <Route path="/popular" component={PopularMoviesContainer} />
    <Route path="/top" component={TopMoviesContainer} />
  </App>
);

export default Routes;
