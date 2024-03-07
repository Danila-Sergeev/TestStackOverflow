import React, { FC } from "react";
import Styles from "./InfoBar.module.css";

const InfoBar: FC = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.name}>Автор</div>
      <div className={Styles.theme}>Тема</div>

      <div className={Styles.box}>
        <div className={Styles.countAnsw}>Количество ответов</div>
        <div className={Styles.tagsBox}>
          <div className={Styles.tags}>Теги</div>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
