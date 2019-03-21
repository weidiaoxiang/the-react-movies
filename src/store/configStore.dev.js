import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
//import api from "../api";
import { createLogger } from "redux-logger";

//const thunkWithExtraArg = thunk.withExtraArgument(api);

const middleware = applyMiddleware(thunk, createLogger({ collapsed: true }));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeEnhancers(middleware));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers").default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
