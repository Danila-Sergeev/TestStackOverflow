import Styles from "./App.module.css";
import { FC, useEffect, useState } from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { getQuestion, setQuestion } from "../../services/actions/questions";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../services/actions/sort";
import InfoPage from "../../Pages/InfoPage/InfoPage";

const App: FC = () => {
  const dispatch: any = useDispatch();
  const question = useSelector((store: any) => store.question.items);
  useEffect(() => {
    dispatch(getQuestion());
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
