import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import Loader from './Components/Loader';
import SearchBox from './Components/SearchBox';
import BooksCard from './Components/BooksCard';
import usePagination from './Helpers/pagination';
import { Book } from './Interfaces/bookInterface';
import usefetchBooksURL from './Helpers/getBooksURL';
import { InitialBookState } from './Redux/initialStateInterface';


const App = () => {
  const itemsPerPage: number = 20;

  // Getting the data from the url now
  const [filters, setFilters] = useState<Array<any>>([]);
  const queryParams = new URLSearchParams(window.location.search);
  const [page, setPage] = useState<number>(Number(queryParams.get('page')));

  const getLoadingState = usefetchBooksURL({page, filters});
  const booksData = useSelector(state => state) as InitialBookState;

  const PaginationData = usePagination(booksData.books, itemsPerPage);
  const handlePageChange = (event: React.ChangeEvent<any>, pageNumber: number): void => {
    setPage(pageNumber);
    PaginationData.jump(pageNumber);
  }

  return (
    <div className="App">
      <SearchBox setFilters={setFilters} />

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
