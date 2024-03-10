import {
  IQuestionmainData,
  IQuestionData,
  IQuestionForwardData,
} from "../constants/constants";

const GET_IDQUESTION = "GET_IDQUESTION";
const LOADING_TOGGLE = "LOADING_TOGGLE";

interface IGetIdQuestion {
  readonly type: typeof GET_IDQUESTION;
  readonly payload: IQuestionForwardData;
  readonly data: IQuestionmainData;
  readonly items: IQuestionData[];
}
interface ILoading {
  readonly type: typeof LOADING_TOGGLE;
  readonly payload: boolean;
}

export type IQuestionActions = IGetIdQuestion | ILoading;

type TquestionState = {
  items: IQuestionData[];
  isFetching: boolean;
  isLoading: boolean;
};

const defaultState: TquestionState = {
  items: [],
  isFetching: true,
  isLoading: true,
};

export default function idQuestionReducer(
  state = defaultState,
  action: IQuestionActions
) {
  switch (action.type) {
    case GET_IDQUESTION:
      return {
        ...state,
        items: action.payload.data.items,
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

export const getIdQuestionRed = (question: IQuestionForwardData) => ({
  type: GET_IDQUESTION,
  payload: question,
});

export const toggleLoading = (state: boolean) => ({
  type: LOADING_TOGGLE,
  payload: state,
});
