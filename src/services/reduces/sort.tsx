import { IQuestionData, ISort } from "../constants/constants";

export const SET_SORT = "SET_SORT";

interface ISetSort {
  readonly type: typeof SET_SORT;
  readonly arr: IQuestionData;
  readonly item: ISort;
}

export type ISortActions = ISetSort;

type TsortState = {
  items: string;
  isFetching: boolean;
};

const defaultState: TsortState = {
  items: "",
  isFetching: true,
};

export default function sortReducer(
  state = defaultState,
  action: ISortActions
) {
  switch (action.type) {
    case SET_SORT:
      return {
        ...state,
        items: action.item.arr,
      };
    default:
      return state;
  }
}
