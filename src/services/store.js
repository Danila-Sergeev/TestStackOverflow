import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reduces/rootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
