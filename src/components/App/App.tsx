import Styles from "./App.module.css";
import { FC, useEffect, useState } from "react";
import HomePage from "../../Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { getQuestion } from "../../services/actions/questions";
import { useDispatch } from "react-redux";

const App: FC = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  return (
    <div className={Styles.App}>
      <button>Get User</button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
