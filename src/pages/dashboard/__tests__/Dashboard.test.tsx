import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test } from 'vitest';
import Dashboard from '../Dashboard';

afterEach(() => {
  cleanup();
});

describe('Testing <Dashboard />', () => {
  test('should render dashboard component', async () => {
    render(<Dashboard />);
    expect(screen.getByText(/TV Maze Search Dashboard/i));
  });

  test('should render dashboard with search component', async () => {
    render(<Dashboard />);
    expect(screen.getByPlaceholderText(/Search TV shows/i));
  });
});
