import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Styles from "./SerachBar.module.css";
import { useSelector } from "react-redux";
import { getQuestion, search } from "../../services/actions/questions";
import { setQuestion } from "../../services/actions/questions";
import { useAppDispatch } from "../../utils/hoc";
import { setSearchData } from "../../services/reduces/search";

const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const serachData = useSelector((store: any) => store.search.items);
  const [serachQuery, setserachQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setserachQuery(event.target.value);
    event.target.value
      ? dispatch(search("activity", event.target.value))
      : dispatch(getQuestion("activity"));
  };

  const onClick = () => {};

  useEffect(() => {
    dispatch(setSearchData(serachQuery));
  }, [serachQuery]);

  return (
    <section>
      <div className={Styles.mainBox}>
        <input
          className={Styles.input}
          type="text"
          name="search"
          placeholder="Поиск..."
          onChange={handleChange}
          value={serachQuery}
        />
      </div>
    </section>
  );
};

export default SearchBar;
