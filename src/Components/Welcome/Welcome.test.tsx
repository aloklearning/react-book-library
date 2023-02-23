import { render, screen } from '@testing-library/react';
import WelcomePage from './Welcome';
import { BrowserRouter as Router } from 'react-router-dom';

// This is just an elementry test to see that we're in the business
test('render welcome page elements', () => {
  render(
    <Router>
        <WelcomePage />
    </Router>
  );

  const exploreButtonElement = screen.getByText('Explore');
  const headerElement = screen.getByText('Welcome to Book Bloc');
  const subHeaderElement = screen.getByText(/Find your next/i);
  
  expect(headerElement).toBeInTheDocument();
  expect(subHeaderElement).toBeInTheDocument();
  expect(exploreButtonElement).toBeInTheDocument();
});

