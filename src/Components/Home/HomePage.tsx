import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import Loader from '../Loader';
import SearchBox from '../SearchBox';
import BooksCard from '../BooksCard';
import EmptyResult from '../EmptyResult';
import usePagination from '../../Helpers/pagination';
import { Book } from '../../Interfaces/bookInterface';
import usefetchBooksURL from '../../Helpers/getBooksURL';
import { InitialBookState } from '../../Redux/initialStateInterface';


const HomePage = () => {
  const itemsPerPage: number = 20;

  // Getting the data from the url now
  const queryParams = new URLSearchParams(window.location.search);
  
  // This excludes the query param with special character and returns string only
  const queryObjectEntries = Object.fromEntries(queryParams.entries());
  const [page, setPage] = useState<number>(Number(queryObjectEntries.page));

  const filterParams = queryObjectEntries.filters;
  const [filterValues, setFiltersValues] = useState<string | null>(filterParams);

  const getLoadingState = usefetchBooksURL({page, filterValues});
  const booksData = useSelector(state => state) as InitialBookState;

  const PaginationData = usePagination(booksData.books, itemsPerPage);
  const handlePageChange = (event: React.ChangeEvent<any>, pageNumber: number): void => {
    setPage(pageNumber);
    PaginationData.jump(pageNumber);
  }

  return (
    <div className="App">
      <SearchBox
        setPageNumber={setPage} 
        searchedValue={filterValues} 
        setFilters={setFiltersValues} 
      />

      {getLoadingState ? 
      <Loader /> : 
      <>
        {/* For better UX */}
        {PaginationData.currentData().length === 0 ? 
        <EmptyResult /> : (
          <>
            <Pagination 
              size="large"
              page={page}  
              color="secondary" 
              variant="outlined" 
              onChange={handlePageChange}
              count={Math.ceil(booksData.count / itemsPerPage)}
            />

            {PaginationData.currentData().map((book: Book) => (
                <BooksCard 
                  book={book} 
                  key={book.id}
                />
            ))}

            <Pagination 
              size="large"
              page={page}  
              color="secondary" 
              variant="outlined"
              onChange={handlePageChange} 
              count={Math.ceil(booksData.count / itemsPerPage)}
            />
          </>
        )}
      </>}
    </div>
  );
}

export default HomePage;