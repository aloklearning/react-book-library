// This is a custom hook to get all the books
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

interface PayloadProps {
    page?: number;
    itemsPerPage?: number;
    filters?: Array<{type: string, values: Array<string | number>}>;
}

const useFetchBooksURL = ({ page=1, itemsPerPage=20, filters=[] }: PayloadProps): string => {
    const booksDispatcher = useDispatch();
    const urlForQueryParam = 'http://nyx.vima.ekt.gr:3000/api/books?'
    + `page=${page}&itemsPerPage=${itemsPerPage}&filters=${filters}`;

    useEffect(() => { 
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
                booksDispatcher({ type: 'ADD_BOOKS', payload: jsonResponse.books })
            } catch (error) {
                return null;
            }
        }

        fetchBooksData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [urlForQueryParam])

    return urlForQueryParam;
}

export default useFetchBooksURL;
