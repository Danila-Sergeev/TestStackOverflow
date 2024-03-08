import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdQuestion } from "../../services/actions/question";
import QuestionInfo from "../../components/QuestionInfo/QuestionInfo";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../UI/Loader";
import { toggleLoading } from "../../services/reduces/question";

const InfoPage: FC = () => {
  useEffect(() => {
    dispatch(getIdQuestion(params.id));
    dispatch(toggleLoading(true));
  }, []);

  const dispatch: any = useDispatch();
  const params = useParams();
  const question = useSelector((store: any) => store.id.items);
  const loading = useSelector((store: any) => store.id.isLoading);
  console.log(loading);

  return (
    <div>
      {!loading &&
        question.map((info: any) => <QuestionInfo key={uuidv4()} obj={info} />)}
      {loading && <Loader />}
    </div>
  );
};

export default InfoPage;
