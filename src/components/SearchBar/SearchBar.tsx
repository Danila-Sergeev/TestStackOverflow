import React, { FC, useEffect, useState } from "react";
import Styles from "./SerachBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getParams } from "../../services/actions/search";
import { setQuestion } from "../../services/actions/questions";

const SearchBar: FC = (props) => {
  const dispatch: any = useDispatch();
  const question = useSelector((store: any) => store.question.items);
  const serach = useSelector((store: any) => store.search.items);
  const sort = useSelector((store: any) => store.sort.items);

  const [serachQuery, setserachQuery] = useState("");

  const handleChange = (event: any) => {
    setserachQuery(event.target.value);
  };

  const onClick = () => {
    let obj =
      sort.length === 0
        ? question.filter((obj: any) => obj.title.includes(serach))
        : sort.filter((obj: any) => obj.title.includes(serach));
    dispatch(setQuestion(obj));
  };

  useEffect(() => {
    dispatch(getParams(serachQuery));
    if (serachQuery === "") {
      dispatch(setQuestion([]));
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
