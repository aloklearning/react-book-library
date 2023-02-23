import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import bookReducer from '../../Redux/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Home Page', () => {
    it('renders search form content', () => {
        render(
            <Provider store={configureStore({ reducer: bookReducer })}>
                <Router>
                    <HomePage />
                </Router>
            </Provider>
        );

        const searchButton = screen.getByRole('button', { name: /search/i});
        const clearButton = screen.getByRole('button', { name: /clear filter/i});
        const searchField = screen.getByRole('textbox', { name: /enter search value/i });
        
        expect(clearButton).toBeVisible();
        expect(searchField).toBeVisible();
        expect(searchButton).toBeVisible();
    });
});