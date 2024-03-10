import { SET_SORT } from "../reduces/sort";
import { IQuestionData } from "../constants/constants";

export const setSort = (arr: IQuestionData[]) => {
  return {
    type: SET_SORT,
    item: {
      arr,
    },
  };
};
