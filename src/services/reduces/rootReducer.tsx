import { combineReducers } from "redux";
import questionReducer from "./questions";
import searchReducer from "./search";
import sortReducer from "./sort";
import idQuestionReducer from "./question";

export const rootReducer = combineReducers({
  question: questionReducer,
  search: searchReducer,
  sort: sortReducer,
  id: idQuestionReducer,
});
