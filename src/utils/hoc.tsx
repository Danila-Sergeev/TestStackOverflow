import { useDispatch } from "react-redux";
import { AppDispatch } from "../services/reduces/rootReducer";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
