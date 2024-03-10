import axios from "axios";
import { SET_QUESTION, getQuestions } from "../reduces/questions";
import { API_URL } from "../../utils/constants";
import { toggleLoading } from "../reduces/question";
import { useAppDispatch } from "../../utils/hoc";

export const getQuestion = () => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(API_URL);

    dispatch(getQuestions(response.data));
    dispatch(toggleLoading(false));
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
