// This is a custom hook to get all the books
import { useState, useEffect } from 'react';

import { Book } from '../Interfaces/BookInterface';

interface PayloadProps {
    page?: number;
    itemsPerPage?: number;
    filters?: Array<{type: string, values: Array<string | number>}>;
}

interface ReturnDataType {
    url: string;
    booksResult: Array<Book>;
}

export const GetBooks = ({ page=1, itemsPerPage=20, filters=[] }: PayloadProps): ReturnDataType => {
    const [books, setBooks] = useState<Book[]>([]);
    const urlForQueryParam = 'http://nyx.vima.ekt.gr:3000/api/books?'
    + `page=${page}&itemsPerPage=${itemsPerPage}&filters=${filters}`;

    useEffect(() => {
        const fetchBooksData = async () => {
            const payload = {
                page: page,
                itemsPerPage: itemsPerPage,
                filters: filters
            };

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
                setBooks(jsonResponse);
            } catch (error) {
                return null;
            }
        }

        fetchBooksData();
    });

    return {url: urlForQueryParam, booksResult: books};
}
