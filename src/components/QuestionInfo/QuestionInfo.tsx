import React, { FC } from "react";
import Styles from "./QuestionInfo.module.css";
import { v4 as uuidv4 } from "uuid";
import parse from "html-react-parser";
import Answers from "../Answers/Answers";
import { IQuestionData } from "../../services/constants/constants";

interface IQuestionMain {
  name: string;
  title: string;
  link: string;
  tags: string[];
  body: string;
  profile_image: string;
  answers: IQuestionData[];
  answer_count: number;
}

const QuestionInfo: FC<IQuestionMain> = (props) => {
  const {
    name,
    title,
    link,
    tags,
    body,
    profile_image,
    answers,
    answer_count,
  } = props;
  return (
    <section className={Styles.main}>
      <div className={Styles.autorInfo}>
        <img className={Styles.img} src={profile_image} alt={name} />
        <div className={Styles.name}>{name}</div>
      </div>

      <div className={Styles.title}>{title}</div>
      {parse(body)}
      <div className={Styles.tagContainer}>
        {tags.map((tag: string) => (
          <div key={uuidv4()} className={Styles.tag}>
            {tag}
          </div>
        ))}
      </div>
      <div className={Styles.link}>
        <a target="Starfall" className={Styles.link} href={link}>
          Ссылка на пост
        </a>
      </div>
      <div className={Styles.answerCount}>{answer_count} Ответов</div>
      {answer_count !== 0 ? (
        <Answers key={uuidv4()} answers={answers} />
      ) : (
        <></>
      )}
    </section>
  );
};

export default QuestionInfo;
