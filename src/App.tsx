import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import Header from './Components/Header';
import Loader from './Components/Loader';
import BooksCard from './Components/BooksCard';
import usePagination from './Helpers/pagination';
import { Book } from './Interfaces/bookInterface';
import usefetchBooksURL from './Helpers/getBooksURL';
import { InitialBookState } from './Redux/initialStateInterface';


const App = () => {
  const itemsPerPage: number = 20;
  const [page, setPage] = useState(1);
  const getLoadingState = usefetchBooksURL({page});
  const booksData = useSelector(state => state) as InitialBookState;

  const PaginationData = usePagination(booksData.books, itemsPerPage);
  const handlePageChange = (event: React.ChangeEvent<any>, pageNumber: number): void => {
    setPage(pageNumber);
    PaginationData.jump(pageNumber);
  }

  return (
    <div className="App">
      <Header />
      {getLoadingState ? 
      <Loader /> : 
      <>
      {/* For better UX */}
      <Pagination 
          size="large"
          page={page}  
          color="secondary" 
          variant="outlined" 
          count={booksData.count}
          onChange={handlePageChange}
        />

        {PaginationData.currentData().map((book: Book) => (
          <BooksCard book={book} key={book.id} />
        ))}

        <Pagination 
          size="large"
          page={page}  
          color="secondary" 
          variant="outlined" 
          count={booksData.count}
          onChange={handlePageChange}
        />
      </>}
    </div>
  );
}

export default App;
