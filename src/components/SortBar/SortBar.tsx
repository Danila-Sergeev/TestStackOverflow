import React, { FC, useEffect, useState } from "react";
import Styles from "./SortBar.module.css";
import { useSelector } from "react-redux";
import { setSort } from "../../services/actions/sort";
import { useAppDispatch } from "../../utils/hoc";
import { getQuestion } from "../../services/actions/questions";
import { toggleLoading } from "../../services/reduces/questions";

const SortBar: FC = () => {
  const dispatch = useAppDispatch();
  const question = useSelector((store: any) => store.question.items);
  const questionSearch = useSelector((store: any) => store.question.sortItems);
  const [sortMethod, setsortMethod] = useState("activity");

  const OnClick = (event: any) => {
    setsortMethod(event.target.value);
  };

  useEffect(() => {
    dispatch(toggleLoading(true));
    dispatch(getQuestion(sortMethod));
  }, [sortMethod]);

  return (
    <section className={Styles.container}>
      <div
        className={
          questionSearch.length === 0 ? Styles.select : Styles.disabled
        }
      >
        <div className={Styles.sortBox}>
          <div>Сортировать по:</div>
          <button
            onClick={OnClick}
            value="activity"
            className={
              sortMethod === "activity"
                ? [Styles.btnActive, Styles.btn].join(" ")
                : Styles.btn
            }
          >
            Последней активности
          </button>
          <button
            onClick={OnClick}
            value="votes"
            className={
              sortMethod === "votes"
                ? [Styles.btnActive, Styles.btn].join(" ")
                : Styles.btn
            }
          >
            Голосам
          </button>
          <button
            onClick={OnClick}
            value="week"
            className={
              sortMethod === "week"
                ? [Styles.btnActive, Styles.btn].join(" ")
                : Styles.btn
            }
          >
            Дате создания
          </button>
        </div>
      </div>
    </section>
  );
};

export default SortBar;
