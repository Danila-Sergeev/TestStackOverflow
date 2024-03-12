import React, { FC, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortBar from "../../components/SortBar/SortBar";
import InfoBar from "../../components/InfoBar/InfoBar";
import PostList from "../../components/PostList/PostList";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Loader from "../../UI/Loader";
import ReactPaginate from "react-paginate";
import Styles from "./Home.module.css";
import { resetAnswers } from "../../services/reduces/answers";
import { useAppDispatch } from "../../utils/hoc";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const question = useSelector((store: any) => store.question.items);
  const loading = useSelector((store: any) => store.question.isLoading);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = question.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(question.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % question.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    dispatch(resetAnswers());
  }, []);

  return (
    <div>
      <SearchBar />
      <SortBar />
      <InfoBar />
      {!loading &&
        currentItems.map((questionData: any) => (
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={Styles.pagination}
        pageLinkClassName={Styles.page_num}
        previousLinkClassName={Styles.page_num}
        nextLinkClassName={Styles.page_num}
        activeLinkClassName={Styles.active}
      />
    </div>
  );
};

export default HomePage;
