import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import bookReducer from '../../Redux/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders search button', () => {
  render(
    <Provider store={configureStore({ reducer: bookReducer })}>
        <Router>
            <HomePage />
        </Router>
    </Provider>
  );

  const searchButton = screen.getByTestId("search-button");
  expect(searchButton).toBeInTheDocument();
});