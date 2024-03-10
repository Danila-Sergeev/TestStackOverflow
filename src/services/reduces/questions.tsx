import { IQuestionmainData, IQuestionData } from "../constants/constants";

const GET_QUESTION = "GET_QUESTION";
export const SET_QUESTION = "SET_QUESTION";

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

export type IQuestionsActions = IGetQuestion | ISetQuestion;

type TQuestionsState = {
  items: IQuestionData[];
  sortItems: IQuestionData[];
  isFetching: boolean;
};

const defaultState: TQuestionsState = {
  items: [],
  sortItems: [],
  isFetching: true,
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
    default:
      return state;
  }
}

export const getQuestions = (question: IQuestionmainData) => ({
  type: GET_QUESTION,
  payload: question,
});
