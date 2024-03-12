import { IAnswersForwardData, IQuestionData } from "../constants/constants";

const GET_ANSWERS = "GET_ANSWERS";
const RESET_ANSWERS = "RESET_ANSWERS";

interface IGetAnswers {
  readonly type: typeof GET_ANSWERS;
  readonly payload: IAnswersForwardData;
  readonly items: IQuestionData[];
}
interface IResetAnswers {
  readonly type: typeof RESET_ANSWERS;
  readonly items: IQuestionData[];
}
export type IAnswersActions = IGetAnswers | IResetAnswers;

type TQuestionsState = {
  items: [];
};
const defaultState: TQuestionsState = {
  items: [],
};

export default function answersReducer(
  state = defaultState,
  action: IAnswersActions
) {
  switch (action.type) {
    case GET_ANSWERS:
      return {
        ...state,
        items: [...state.items, action.payload.items],
      };
    case RESET_ANSWERS:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

export const getAnswers = (answer: IQuestionData) => ({
  type: GET_ANSWERS,
  payload: answer,
});
export const resetAnswers = () => ({
  type: RESET_ANSWERS,
});
