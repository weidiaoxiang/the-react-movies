import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from "./components/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
