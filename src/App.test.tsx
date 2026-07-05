import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import './i18n';

test('renders the brand in the header', () => {
  render(<App />);
  const brand = screen.getAllByText(/David Yepes/i)[0];
  expect(brand).toBeInTheDocument();
});
