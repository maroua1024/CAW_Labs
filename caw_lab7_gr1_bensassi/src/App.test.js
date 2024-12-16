import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page correctly', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to Our Restaurant/i)).toBeInTheDocument();
});
