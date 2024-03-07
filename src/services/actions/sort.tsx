import axios from "axios";
import { SET_SORT } from "../reduces/sort";

export const setSort = (arr: any) => {
  return {
    type: SET_SORT,
    item: {
      arr,
    },
  };
};
