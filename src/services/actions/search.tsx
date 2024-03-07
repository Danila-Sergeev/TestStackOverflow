import axios from "axios";
import { SET_PARAMS } from "../reduces/search";

export const getParams = (info: string) => {
  return {
    type: SET_PARAMS,
    item: {
      info,
    },
  };
};
