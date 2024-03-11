import Styles from "./App.module.css";
import { FC, useEffect } from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { getQuestion, setQuestion } from "../../services/actions/questions";
import { setSort } from "../../services/actions/sort";
import InfoPage from "../../Pages/InfoPage/InfoPage";
import { useAppDispatch } from "../../utils/hoc";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuestion("activity"));
    dispatch(setQuestion([]));
    dispatch(setSort([]));
  }, []);

  return (
    <div className={Styles.App}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<InfoPage />} />
      </Routes>
    </div>
  );
};

export default App;
