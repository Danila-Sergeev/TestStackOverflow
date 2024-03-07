import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdQuestion } from "../../services/actions/question";
import QuestionInfo from "../../components/QuestionInfo/QuestionInfo";
import { v4 as uuidv4 } from "uuid";

const InfoPage: FC = (props) => {
  useEffect(() => {
    dispatch(getIdQuestion(id));
  }, []);

  const dispatch: any = useDispatch();
  const params = useParams();
  const id = params.id;

  const question = useSelector((store: any) => store.id.items);
  console.log(question);

  return (
    <div>
      {question.map((info: any) => (
        <QuestionInfo key={uuidv4()} obj={info} />
      ))}
    </div>
  );
};

export default InfoPage;
