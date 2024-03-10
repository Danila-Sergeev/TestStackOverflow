import { IQuestionData, IQuestionmainData } from "../constants/constants";

export const SEARCH = "SEARCH";

interface ISetSearch {
  readonly type: typeof SEARCH;
  readonly payload: IQuestionmainData;
  readonly items: IQuestionData;
}

export type ISearchActions = ISetSearch;

type TsearchState = {
  item: string;
  items: any;
  isFetching: boolean;
};

const defaultState: TsearchState = {
  item: "",
  items: [],
  isFetching: true,
};

export default function searchReducer(
  state = defaultState,
  action: ISearchActions
) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        items: action.payload.items,
      };
    default:
      return state;
  }
}

export const Search = (item: IQuestionData) => ({
  type: SEARCH,
  payload: item,
});
