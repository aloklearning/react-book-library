// This is a custom hook to get all the books
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PayloadProps {
    page?: number;
    itemsPerPage?: number;
    filters?: Array<{type: string, values: Array<string | number>}>;
}

const useFetchBooksURL = ({ page=1, itemsPerPage=20, filters=[] }: PayloadProps): boolean => {
    const navigate = useNavigate();
    const booksDispatcher = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const urlForQueryParam = `?page=${page}&itemsPerPage=${itemsPerPage}&filters=${null}`;

    useEffect(() => { 
        setIsLoading(true);
        const fetchBooksData = async () => {
            const payload = { page, itemsPerPage, filters };

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
                navigate({ pathname: '/api/books', search: urlForQueryParam});
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
     }, [page, itemsPerPage]);

    return isLoading;
}

export default useFetchBooksURL;
