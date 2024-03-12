import React, { FC, useEffect, useState } from "react";
import { getAnswer } from "../../services/actions/answers";
import { useAppDispatch } from "../../utils/hoc";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import Styles from "./Answers.module.css";
import { v4 as uuidv4 } from "uuid";
import { IQuestionData } from "../../services/constants/constants";

interface IAnswers {
  answers: IQuestionData[];
}

const Answers: FC<IAnswers> = (props) => {
  const [obj, setObj] = useState([{}]);

  const dispatch = useAppDispatch();
  const Answers = useSelector((store: any) => store.answer.items);
  const { answers } = props;
  useEffect(() => {
    setObj([]);
    answers.map((answer: IQuestionData) => {
      setObj((prevObj: any) => [
        ...prevObj,
        {
          answer_id: answer.answer_id,
        },
      ]);
    });
  }, []);

  useEffect(() => {
    obj.map((id: any) => {
      if (id.answer_id !== undefined) {
        dispatch(getAnswer(id.answer_id));
      }
    });
  }, [obj]);

  return (
    <section>
      {Answers.map((answer: IQuestionData[]) =>
        answer.map((object: IQuestionData) => (
          <div key={uuidv4()}>
            <div className={Styles.autorInfo}>
              <img
                className={Styles.img}
                src={object.owner.profile_image}
                alt={object.owner.display_name}
              />
              <div className={Styles.name}>{object.owner.display_name}</div>
            </div>

            {parse(object.body)}
          </div>
        ))
      )}
    </section>
  );
};

export default Answers;
