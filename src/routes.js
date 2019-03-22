import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import PopularMoviesContainer from "./containers/PopularMoviesContainer";

const Routes = () => (
  <App>
    <Route path="/" component={PopularMoviesContainer} />
  </App>
);

export default Routes;
