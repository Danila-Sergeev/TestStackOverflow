import axios from "axios";
import { useAppDispatch } from "../../utils/hoc";
import { getAnswers } from "../reduces/answers";

export const getAnswer = (id: number) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/answers/${id}?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNdWme`
    );

    dispatch(getAnswers(response.data));
  };
};
