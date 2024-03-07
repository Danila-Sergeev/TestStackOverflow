import axios from "axios";
import { getIdQuestionRed } from "../reduces/question";

export const getIdQuestion = (id: any) => {
  return async (dispatch: any) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow`
    );

    dispatch(getIdQuestionRed(response));
  };
};
