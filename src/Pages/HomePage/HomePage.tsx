import React, { FC } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortBar from "../../components/SortBar/SortBar";
import InfoBar from "../../components/InfoBar/InfoBar";
import PostList from "../../components/PostList/PostList";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../UI/Loader";

const HomePage: FC = () => {
  const question = useSelector((store: any) => store.question.items);
  const questionSearch = useSelector((store: any) => store.question.sortItems);
  const questionSort = useSelector((store: any) => store.sort.items);
  const loading = useSelector((store: any) => store.id.isLoading);

  return (
    <div>
      <SearchBar />
      <SortBar />
      <InfoBar />
      {questionSearch.length === 0 || question === questionSearch
        ? questionSort.length === 0
          ? question.map((questionData: any) => (
              <PostList
                key={uuidv4()}
                tags={questionData.tags}
                count={questionData.answer_count}
                title={questionData.title}
                id={questionData.question_id}
                name={questionData.owner.display_name}
              />
            ))
          : questionSort.map((questionData: any) => (
              <PostList
                key={uuidv4()}
                tags={questionData.tags}
                count={questionData.answer_count}
                title={questionData.title}
                id={questionData.question_id}
                name={questionData.owner.display_name}
              />
            ))
        : questionSearch.map((questionData: any) => (
            <PostList
              key={uuidv4()}
              tags={questionData.tags}
              count={questionData.answer_count}
              title={questionData.title}
              id={questionData.question_id}
              name={questionData.owner.display_name}
            />
          ))}
      {loading && <Loader />}
    </div>
  );
};

export default HomePage;
