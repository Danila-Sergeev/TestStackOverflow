import React, { FC } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortBar from "../../components/SortBar/SortBar";
import InfoBar from "../../components/InfoBar/InfoBar";
import PostList from "../../components/PostList/PostList";
import { useSelector, useStore } from "react-redux";
import { store } from "../../services/store";
import { v4 as uuidv4 } from "uuid";

const HomePage: FC = (props) => {
  const question = useSelector((store: any) => store.question.items);
  const questionSearch = useSelector((store: any) => store.question.sortItems);
  const questionSort = useSelector((store: any) => store.sort.items);
  return (
    <div>
      <SearchBar />
      <SortBar />
      <InfoBar />
      {questionSearch.length === 0 || question === questionSearch
        ? questionSort.length === 0
          ? question.map((questionData: any) => (
              <PostList key={uuidv4()} question={questionData} />
            ))
          : questionSort.map((questionData: any) => (
              <PostList key={uuidv4()} question={questionData} />
            ))
        : questionSearch.map((questionData: any) => (
            <PostList key={uuidv4()} question={questionData} />
          ))}
    </div>
  );
};

export default HomePage;
