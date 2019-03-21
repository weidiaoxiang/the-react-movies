import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
//import api from "../api";

//const thunkWithExtraArg = thunk.withExtraArgument(api);
const middleware = applyMiddleware(thunk);

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, compose(middleware));

  return store;
}
