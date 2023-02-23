// This is a custom hook to get all the books
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBooksData } from './fetchBooks';
import { useSearchParams } from 'react-router-dom';

interface PayloadProps {
    page?: number;
    itemsPerPage?: number;
    filterValues?: string | null;
}

const useFetchBooksURL = ({ page=1, itemsPerPage=20, filterValues='' }: PayloadProps): boolean => {
    const booksDispatcher = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const [, setSearchParams] = useSearchParams();
    const urlForQueryParam = `?page=${page}&itemsPerPage=${itemsPerPage}&filters=${filterValues}`;

    useEffect(() => { 
        getAllBooks();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [page, filterValues]);

     const getAllBooks = async (): Promise<void> => {
        setIsLoading(true);
        
        // This helps to make the query url change, leading to making
        // pagination data persistant
        setSearchParams(urlForQueryParam);
        const payload = {
            page, 
            itemsPerPage,
            filters: filterValues !== 'null' ? [{ type: 'all', values: [filterValues] }] : []
        };

        const booksData = await fetchBooksData(payload);

        setIsLoading(false);
        if(booksData) {
            booksDispatcher({ type: 'ADD_BOOKS', payload: {
                books: booksData.books, 
                count: booksData.count 
            }});
        }
     }

    return isLoading;
}

export default useFetchBooksURL;
