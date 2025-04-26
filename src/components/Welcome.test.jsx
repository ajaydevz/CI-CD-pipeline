import { test, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from './Welcome';

test('renders greeting with provided name', () => {
  render(<Welcome name="Test User" />);
  expect(screen.getByText('Hello, Test User')).toBeInTheDocument();
});

test('renders greeting with default name if no name is provided', () => {
  render(<Welcome />);
  expect(screen.getByText('Hello, Guest')).toBeInTheDocument();
});
