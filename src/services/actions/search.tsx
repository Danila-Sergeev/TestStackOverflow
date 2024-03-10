import axios from "axios";
import { Search } from "../reduces/search";
import { useAppDispatch } from "../../utils/hoc";

export const search = (title: string) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${title}&site=stackoverflow`
    );

    dispatch(Search(response.data));
  };
};
