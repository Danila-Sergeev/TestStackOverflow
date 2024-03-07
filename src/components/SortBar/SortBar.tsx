import React, { FC } from "react";
import Styles from "./SortBar.module.css";
import arrow from "../../img/arrow.png";

const SortBar: FC = (props) => {
  return (
    <section className={Styles.container}>
      <div className={Styles.select}>
        <select>
          <option>Link 1</option>
          <option>Link 2</option>
          <option>Link 3</option>
        </select>
      </div>

      <div className={Styles.btnContainer}>
        <button className={Styles.btn}>
          <img alt="arrow" className={Styles.upImg} src={arrow} />
        </button>
        <button className={Styles.btn}>
          <img alt="arrow" className={Styles.downImg} src={arrow} />
        </button>
      </div>
    </section>
  );
};

export default SortBar;
