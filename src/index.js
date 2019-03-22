import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./index.css";
import routes from "./routes";
import configureStore from "./store";
import "./scss/all.scss";

const MovieApp = withRouter(routes);
const store = configureStore(/* initial state any?*/);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router>
        <Route component={MovieApp} />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
