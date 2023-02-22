import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

import { Provider } from 'react-redux';
import bookReducer from '../../Redux/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

test('render explore button', () => {
  render(
    <Provider store={configureStore({ reducer: bookReducer })}>
        <Router>
            <HomePage />
        </Router>
    </Provider>
  );

  const linkElement = screen.getByText("Search");
  expect(linkElement).toBeInTheDocument();
});