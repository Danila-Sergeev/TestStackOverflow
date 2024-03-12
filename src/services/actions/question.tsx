import axios from "axios";
import { getIdQuestionRed, toggleLoading } from "../reduces/question";
import { useAppDispatch } from "../../utils/hoc";

export const getIdQuestion = (id: string | undefined) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=!nNPvSNPI3D`
    );
    dispatch(toggleLoading(false));
    dispatch(getIdQuestionRed(response));
  };
};
