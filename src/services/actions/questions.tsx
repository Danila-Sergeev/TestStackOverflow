import axios from "axios";
import { setQuestion } from "../reduces/questions";
import { API_URL } from "../../utils/constants";

export const getQuestion = () => {
  return async (dispatch: any) => {
    const response = await axios.get(API_URL);

    dispatch(setQuestion(response.data));
  };
};
