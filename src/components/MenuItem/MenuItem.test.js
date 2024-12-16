import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem'; 

test('renders MenuItem with correct information', () => {
  const mockAddToCart = jest.fn();
  const item = {
    id: 1,
    name: 'Grilled Chicken',
    image: 'image.png',
    description: 'Savory grilled chicken',
    price: 12.5,
  };

  render(<MenuItem item={item} addToCart={mockAddToCart} />);

  expect(screen.getByRole('heading', { name: /grilled chicken/i })).toBeInTheDocument();

  expect(screen.getByText(/savory grilled chicken/i)).toBeInTheDocument();

  expect(screen.getByText('$12.50')).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Add to Cart/i));
  expect(mockAddToCart).toHaveBeenCalledWith(item);
});
