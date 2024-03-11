import { IQuestionData, IQuestionmainData } from "../constants/constants";

export const SEARCH_DATA = "SEARCH_DATA";

interface ISetSearch {
  readonly type: typeof SEARCH_DATA;
  readonly payload: string;
}

export type ISearchActions = ISetSearch;

type TsearchState = {
  item: string;
};

const defaultState: TsearchState = {
  item: "",
};

export default function searchReducer(
  state = defaultState,
  action: ISearchActions
) {
  console.log(action);
  switch (action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}

export const setSearchData = (item: string) => {
  return {
    type: SEARCH_DATA,
    payload: {
      item,
    },
  };
};
