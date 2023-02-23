import { fetchBooksData } from "./fetchBooks";

const MOCKDATA = {
    books: [
        {
            "id": 2079,
            "book_author": [
                "Άγγελος, Χριστόφορος (†1638)"
            ],
            "book_title": "Πόνησις Χριστοφόρου του Αγγέλου Έλληνος",
            "book_publication_year": 1617,
            "book_publication_country": "Αγγλία",
            "book_publication_city": "Οξφόρδη",
            "book_pages": 12
        },
        {
            "id": 2080,
            "book_author": [
                "Άγγελος, Χριστόφορος (†1638)"
            ],
            "book_title": "A Grecian who tasted of many",
            "book_publication_year": 1617,
            "book_publication_country": "Αγγλία",
            "book_publication_city": "Οξφόρδη",
            "book_pages": 16
        },
        {
            "id": 2076,
            "book_author": [
                "Άγγελος, Χριστόφορος (†1638)"
            ],
            "book_title": "A Grecian who tasted of many",
            "book_publication_year": 1618,
            "book_publication_country": "Αγγλία",
            "book_publication_city": "Οξφόρδη",
            "book_pages": 16
        }
    ]
};

describe('Fetch Books', () => {
    test('fetch books', async () => {
        const payload = { page: 1, itemsPerPage: 20, filters: []};
    
        window.fetch = jest.fn().mockImplementationOnce(() => 
            Promise.resolve({
                json: () => MOCKDATA
            })
        );
    
        const booksData = await fetchBooksData(payload);
        expect(booksData.books).toHaveLength(3);
    });

    test('when api call fails', async () => {
        window.fetch = jest.fn().mockRejectedValueOnce(new Error(''));

        const result = await fetchBooksData({});
        expect(result).toBe(null);
    })
});