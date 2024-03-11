import React, { FC } from "react";
import Styles from "./QuestionInfo.module.css";
import { v4 as uuidv4 } from "uuid";
import parse, { HTMLReactParserOptions } from "html-react-parser";

interface IQuestionMain {
  name: string;
  title: string;
  link: string;
  tags: string[];
  body: string;
  profile_image: string;
}

const QuestionInfo: FC<IQuestionMain> = (props) => {
  const { name, title, link, tags, body, profile_image } = props;
  console.log(profile_image);
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
    </section>
  );
};

export default QuestionInfo;
