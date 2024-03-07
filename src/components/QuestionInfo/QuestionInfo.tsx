import React, { FC } from "react";
import Styles from "./QuestionInfo.module.css";
import { v4 as uuidv4 } from "uuid";

interface IQuestionMain {
  obj: {};
}

const QuestionInfo: FC<IQuestionMain> = (obj: any) => {
  console.log(obj);
  return (
    <section className={Styles.main}>
      <div className={Styles.name}>{obj.obj.owner.display_name}</div>
      <div className={Styles.title}>{obj.obj.title}</div>
      <div className={Styles.link}>
        <a className={Styles.link} href={obj.obj.link}>
          Ссылка на пост
        </a>
      </div>
      {obj.obj.tags.map((tag: any) => (
        <div key={uuidv4()} className={Styles.tag}>
          {tag}
        </div>
      ))}
    </section>
  );
};

export default QuestionInfo;
