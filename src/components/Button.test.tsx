import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const mockOnClick = vi.fn();
  render(<Button onClick={mockOnClick}>Click me</Button>);

  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(mockOnClick).toHaveBeenCalledOnce();
});

test('shows loading state when loading prop is true', () => {
  render(<Button loading={true}>Submit</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});

test('is disabled when disabled prop is true', () => {
  render(<Button disabled={true}>Submit</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeDisabled();
});
