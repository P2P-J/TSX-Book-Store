import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/common/books/BooksFilter";
import BooksEmpty from "../components/common/books/BooksEmpty";
import Pagination from "../components/common/books/Pagination";
import BooksList from "../components/common/books/BooksList";
import BooksViewSwitcher from "../components/common/books/BooksViewSwitcher";
import { useBooks } from "../hooks/useBooks"


function Books() {
  const {books, pagination, isEmpty} = useBooks();
  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <BooksFilter />
        <BooksViewSwitcher /> 
        {!isEmpty && <BooksList books={books} />}
        {isEmpty&& <BooksEmpty />} 
      
      {!isEmpty &&   <Pagination pagination={pagination} />}
      </BooksStyle>
    </>
  );
}

const BooksStyle = styled.div` display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }`;

export default Books;
