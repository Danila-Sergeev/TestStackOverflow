import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getIdQuestion } from "../../services/actions/question";
import QuestionInfo from "../../components/QuestionInfo/QuestionInfo";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../UI/Loader";
import { toggleLoading } from "../../services/reduces/question";
import { useAppDispatch } from "../../utils/hoc";

const InfoPage: FC = () => {
  useEffect(() => {
    dispatch(getIdQuestion(params.id));
    dispatch(toggleLoading(true));
  }, []);

  const dispatch = useAppDispatch();
  const params = useParams();
  const question = useSelector((store: any) => store.id.items);
  const loading = useSelector((store: any) => store.id.isLoading);

  return (
    <div>
      {!loading &&
        question.map((info: any) => (
          <QuestionInfo
            key={uuidv4()}
            answers={info.answers}
            profile_image={info.owner.profile_image}
            body={info.body}
            tags={info.tags}
            title={info.title}
            link={info.link}
            name={info.owner.display_name}
            answer_count={info.answer_count}
          />
        ))}
      {loading && <Loader />}
    </div>
  );
};

export default InfoPage;
