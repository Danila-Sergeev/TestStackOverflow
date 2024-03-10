import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Styles from "./SerachBar.module.css";
import { useSelector } from "react-redux";
import { search } from "../../services/actions/search";
import { setQuestion } from "../../services/actions/questions";
import { useAppDispatch } from "../../utils/hoc";

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const serachData = useSelector((store: any) => store.search.items);
  const [serachQuery, setserachQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setserachQuery(event.target.value);
  };

  const onClick = () => {
    dispatch(setQuestion(serachData));
  };

  useEffect(() => {
    if (serachQuery === "") {
      dispatch(setQuestion([]));
    }
    if (serachQuery !== "") {
      dispatch(search(serachQuery));
    }
  }, [serachQuery]);

  return (
    <section>
      <div className={Styles.mainBox}>
        <input
          className={Styles.input}
          type="text"
          name="search"
          placeholder="Search theme.."
          onChange={handleChange}
          value={serachQuery}
        />
        <button onClick={onClick} className={Styles.btn}>
          Serach
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
