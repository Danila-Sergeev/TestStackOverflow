import { combineReducers } from "redux";
import questionReducer from "./questions";
import searchReducer from "./search";
import sortReducer from "./sort";
import idQuestionReducer from "./question";
import { store } from "../store";
import answersReducer from "./answers";

export const rootReducer = combineReducers({
  question: questionReducer,
  search: searchReducer,
  sort: sortReducer,
  id: idQuestionReducer,
  answer: answersReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
