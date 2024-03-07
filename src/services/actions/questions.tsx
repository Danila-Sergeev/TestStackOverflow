import axios from "axios";
import { SET_QUESTION, getQuestions } from "../reduces/questions";
import { API_URL } from "../../utils/constants";

export const getQuestion = () => {
  return async (dispatch: any) => {
    const response = await axios.get(API_URL);

    dispatch(getQuestions(response.data));
  };
};

export const setQuestion = (questions: []) => {
  return {
    type: SET_QUESTION,
    item: {
      questions,
    },
  };
};
