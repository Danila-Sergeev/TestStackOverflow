import { IQuestionmainData, IQuestionData } from "../constants/constants";

const GET_QUESTION = "GET_QUESTION";
export const SET_QUESTION = "SET_QUESTION";
const LOADING_TOGGLE = "LOADING_TOGGLE";
export const SEARCH = "SEARCH";

interface IGetQuestion {
  readonly type: typeof GET_QUESTION;
  readonly items: IQuestionData[];
  readonly payload: IQuestionmainData;
}
interface ISetQuestion {
  readonly type: typeof SET_QUESTION;
  readonly questions: IQuestionData[];
  readonly item: IQuestionmainData;
}
interface ISetSearch {
  readonly type: typeof SEARCH;
  readonly payload: IQuestionmainData;
  readonly items: IQuestionData;
}
interface ILoading {
  readonly type: typeof LOADING_TOGGLE;
  readonly payload: boolean;
}

export type IQuestionsActions =
  | IGetQuestion
  | ISetQuestion
  | ILoading
  | ISetSearch;

type TQuestionsState = {
  items: IQuestionData[];
  sortItems: IQuestionData[];
  isFetching: boolean;
  isLoading: boolean;
};

const defaultState: TQuestionsState = {
  items: [],
  sortItems: [],
  isFetching: true,
  isLoading: true,
};

export default function questionReducer(
  state = defaultState,
  action: IQuestionsActions
) {
  switch (action.type) {
    case GET_QUESTION:
      return {
        ...state,
        items: action.payload.items,
      };
    case SET_QUESTION:
      if (action.item.questions.length === 0) {
        console.log("Ничего не найдено или не введено");
      }
      return {
        ...state,
        sortItems: action.item.questions,
      };
    case SEARCH:
      return {
        ...state,
        items: action.payload.items,
      };
    case LOADING_TOGGLE:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

export const getQuestions = (question: IQuestionmainData) => ({
  type: GET_QUESTION,
  payload: question,
});
export const Search = (item: IQuestionData) => ({
  type: SEARCH,
  payload: item,
});

export const toggleLoading = (state: boolean) => ({
  type: LOADING_TOGGLE,
  payload: state,
});
