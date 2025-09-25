import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);

  // Check that the header is rendered
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});

test('renders wallet connect component', () => {
  render(<App />);

  // Check that wallet connect functionality is available
  const walletButton = screen.getByText(/connect wallet/i);
  expect(walletButton).toBeInTheDocument();
});
