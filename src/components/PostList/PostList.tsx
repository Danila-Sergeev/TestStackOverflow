import React, { FC } from "react";
import Styles from "./PostList.module.css";
import { v4 as uuidv4 } from "uuid";

interface IQuestionMain {
  question: {};
}

const PostList: FC<IQuestionMain> = (question: any) => {
  return (
    <section className={Styles.container}>
      <div className={Styles.name}>{question.question.owner.display_name}</div>
      <div className={Styles.theme}>{question.question.title}</div>
      <div className={Styles.box}>
        <div className={Styles.countAnsw}>{question.question.answer_count}</div>
        <div className={Styles.tagsBox}>
          {question.question.tags.map((tag: string) => (
            <div key={uuidv4()} className={Styles.tags}>
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
