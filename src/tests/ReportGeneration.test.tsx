import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ReportGeneration } from '../components/reports/ReportGeneration';

test('renders ReportGeneration component', () => {
  render(<ReportGeneration />);
  expect(screen.getByText('Report Generation')).toBeInTheDocument();
  expect(screen.getByText('Generate and download financial and operational reports')).toBeInTheDocument();
});

test('downloads report on button click', () => {
  render(<ReportGeneration />);
  const downloadButton = screen.getAllByRole('button')[0];
  fireEvent.click(downloadButton);
  expect(console.log).toHaveBeenCalledWith('Downloading Monthly Revenue Report');
});
