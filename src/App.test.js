import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/DevOps Bookstore/i);
  expect(linkElement).toBeInTheDocument();
});
