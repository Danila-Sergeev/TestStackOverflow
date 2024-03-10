import React, { FC } from "react";
import Styles from "./QuestionInfo.module.css";
import { v4 as uuidv4 } from "uuid";

interface IQuestionMain {
  name: string;
  title: string;
  link: string;
  tags: string[];
}

const QuestionInfo: FC<IQuestionMain> = (props) => {
  const { name, title, link, tags } = props;
  return (
    <section className={Styles.main}>
      <div className={Styles.name}>{name}</div>
      <div className={Styles.title}>{title}</div>
      <div className={Styles.link}>
        <a target="Starfall" className={Styles.link} href={link}>
          Ссылка на пост
        </a>
      </div>
      {tags.map((tag: string) => (
        <div key={uuidv4()} className={Styles.tag}>
          {tag}
        </div>
      ))}
    </section>
  );
};

export default QuestionInfo;
