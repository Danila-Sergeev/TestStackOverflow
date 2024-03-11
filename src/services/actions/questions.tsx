import axios from "axios";
import { SET_QUESTION, Search, getQuestions } from "../reduces/questions";
import { API_URL } from "../../utils/constants";
import { toggleLoading } from "../reduces/questions";
import { useAppDispatch } from "../../utils/hoc";

export const getQuestion = (sort: string, page: number = 1) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/questions?page=${page}&pagesize=100&order=desc&sort=${sort}&site=stackoverflow`
    );

    dispatch(getQuestions(response.data));
    dispatch(toggleLoading(false));
  };
};

export const search = (sort: string, title: string) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/search?pagesize=100&order=desc&sort=${sort}&intitle=${title}&site=stackoverflow`
    );

    dispatch(Search(response.data));
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
