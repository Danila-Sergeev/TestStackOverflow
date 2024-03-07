import { combineReducers } from "redux";
import questionReducer from "./questions";

export const rootReducer = combineReducers({
  question: questionReducer,
});
