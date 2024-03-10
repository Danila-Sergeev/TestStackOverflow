import React, { FC } from "react";
import Styles from "./PostList.module.css";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";

interface IQuestionMain {
  name: string;
  id: string;
  title: string;
  count: number;
  tags: string[];
}

const PostList: FC<IQuestionMain> = (props) => {
  const { name, id, title, count, tags } = props;
  return (
    <NavLink to={`/${id}`} className={Styles.container}>
      <div className={Styles.name}>{name}</div>
      <div className={Styles.theme}>{title}</div>
      <div className={Styles.box}>
        <div className={Styles.countAnsw}>{count}</div>
        <div className={Styles.tagsBox}>
          {tags.map((tag: string) => (
            <div key={uuidv4()} className={Styles.tags}>
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </NavLink>
  );
};

export default PostList;
