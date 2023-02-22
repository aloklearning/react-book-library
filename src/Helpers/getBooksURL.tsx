// This is a custom hook to get all the books
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
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
        setIsLoading(true);
        
        // This helps to make the query url change, leading to making
        // pagination data persistant
        setSearchParams(urlForQueryParam);
        const payload = {
            page, 
            itemsPerPage,
            filters: filterValues !== 'null' ? [{ type: 'all', values: [filterValues] }] : []
        };

        const fetchBooksData = async () => {
            try {
                const response = await fetch('http://nyx.vima.ekt.gr:3000/api/books', {
                    mode: 'cors', 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const jsonResponse = await response.json();

                // Dispatching the updated information to the redux store finally
                setIsLoading(false);
                booksDispatcher({ type: 'ADD_BOOKS', payload: {
                    books: jsonResponse.books, 
                    count: jsonResponse.count 
                }});
            } catch (error) {
                setIsLoading(false);
                return null;
            }
        }

        fetchBooksData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [page, filterValues]);

    return isLoading;
}

export default useFetchBooksURL;
