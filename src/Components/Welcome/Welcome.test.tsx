import { render, screen } from '@testing-library/react';
import WelcomePage from './Welcome';
import { BrowserRouter as Router } from 'react-router-dom';

// This is just an elementry test to see that we're in the business
test('render explore button', () => {
  render(
    <Router>
        <WelcomePage />
    </Router>
  );
  const linkElement = screen.getByText("Explore");
  expect(linkElement).toBeInTheDocument();
});