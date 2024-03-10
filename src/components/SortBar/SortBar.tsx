import React, { FC } from "react";
import Styles from "./SortBar.module.css";
import { useSelector } from "react-redux";
import { setSort } from "../../services/actions/sort";
import { useAppDispatch } from "../../utils/hoc";

const SortBar: FC = () => {
  const dispatch = useAppDispatch();
  const question = useSelector((store: any) => store.question.items);
  const questionSearch = useSelector((store: any) => store.question.sortItems);

  const sortPosts = (sorted: string) => {
    let sortedArr;
    if (sorted === "answer_count") {
      sortedArr = [...question].sort((a, b) => b[sorted] - a[sorted]);
      dispatch(setSort(sortedArr));
    }
    if (sorted === "title") {
      sortedArr = [...question].sort((a, b) =>
        a[sorted].toLowerCase() > b[sorted].toLowerCase() ? 1 : -1
      );

      dispatch(setSort(sortedArr));
    }
    if (sorted === "display_name") {
      sortedArr = [...question].sort((a, b) =>
        a.owner[sorted].toLowerCase() > b.owner[sorted].toLowerCase() ? 1 : -1
      );

      dispatch(setSort(sortedArr));
    }
    if (sorted === "delete") {
      dispatch(setSort([]));
    }
  };
  return (
    <section className={Styles.container}>
      <div
        className={
          questionSearch.length === 0 ? Styles.select : Styles.disabled
        }
      >
        <select onChange={(event) => sortPosts(event.target.value)}>
          <option value={"delete"}>Сортировка</option>
          <option value={"display_name"}>Атор</option>
          <option value={"title"}>Тема</option>
          <option value={"answer_count"}>Количество ответов</option>
        </select>
      </div>
    </section>
  );
};

export default SortBar;
