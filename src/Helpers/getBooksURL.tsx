// This is a custom hook to get all the books
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

interface PayloadProps {
    page?: number;
    itemsPerPage?: number;
    filters?: Array<{type: string, values: Array<string | number>}>;
}

interface ReturnDataType {
    isLoading: boolean;
    queryParamUrl: string;
}

const useFetchBooksURL = ({ page=1, itemsPerPage=20, filters=[] }: PayloadProps): ReturnDataType => {
    const booksDispatcher = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const urlForQueryParam = 'http://nyx.vima.ekt.gr:3000/api/books?'
    + `page=${page}&itemsPerPage=${itemsPerPage}&filters=${filters}`;

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
                booksDispatcher({ type: 'ADD_BOOKS', payload: jsonResponse.books })
            } catch (error) {
                setIsLoading(false);
                return null;
            }
        }

        fetchBooksData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [urlForQueryParam])

    return { isLoading, queryParamUrl: urlForQueryParam };
}

export default useFetchBooksURL;
