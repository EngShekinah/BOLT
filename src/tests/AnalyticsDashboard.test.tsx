import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AnalyticsDashboard } from '../components/analytics/AnalyticsDashboard';

test('renders AnalyticsDashboard component', () => {
  render(<AnalyticsDashboard />);
  expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Visualize key metrics and analytics')).toBeInTheDocument();
  expect(screen.getByText('Monthly Sales')).toBeInTheDocument();
  expect(screen.getByText('Inventory Distribution')).toBeInTheDocument();
});
