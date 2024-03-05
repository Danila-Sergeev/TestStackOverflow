import React, { FC } from "react";
import Styles from "./SerachBar.module.css";

const SearchBar: FC = (props) => {
  return (
    <section>
      <div className={Styles.mainBox}>
        <input
          className={Styles.input}
          type="text"
          name="search"
          placeholder="Search.."
        />
        <button className={Styles.btn}>Serach</button>
      </div>
    </section>
  );
};

export default SearchBar;
