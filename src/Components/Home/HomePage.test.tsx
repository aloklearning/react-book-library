import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import bookReducer from '../../Redux/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

const MOCKDATA = [
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
    },
];

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ books: MOCKDATA })
})) as jest.Mock;

describe('HomePage', () => {
    render(
        <Provider store={configureStore({ reducer: bookReducer })}>
            <Router>
                <HomePage />
            </Router>
        </Provider>
    );

    it('renders search form content', () => {
        const searchButton = screen.getByRole('button', { name: /search/i});
        const clearButton = screen.getByRole('button', { name: /clear filter/i});
        const searchField = screen.getByRole('textbox', { name: /enter search value/i });
        
        expect(clearButton).toBeVisible();
        expect(searchField).toBeVisible();
        expect(searchButton).toBeVisible();
    });

    // it('renders book item', async () => {
    //     // const booksCardList = screen.queryAllByTestId('book-card');
    //     // expect(booksCardList).toHaveLength(3);
    //     const pagination = await waitFor(() => 
    //         screen.findByTestId('pagination-content'),
    //         { timeout: 3000 }
    //     );
    //     expect(pagination).toBeInTheDocument();
    // })
});