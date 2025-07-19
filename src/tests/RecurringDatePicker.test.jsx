// src/__tests__/RecurringDatePicker.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecurringDatePicker from '../Container/RecurringDatePicker';
import '@testing-library/jest-dom';

describe('RecurringDatePicker Integration Test', () => {
  it('updates preview when selecting frequency and dates', async() => {
    render(<RecurringDatePicker />);

    // Select frequency
    fireEvent.change(screen.getByLabelText(/frequency/i), {
      target: { value: 'weekly' },
    });
    // Set weekday for weekly frequency
 const weekdayInput = await screen.findByLabelText(/weekday/i);
    fireEvent.change(weekdayInput, { target: { value: 'Tuesday' } });



    // Set start and end dates
    fireEvent.change(screen.getByLabelText(/start date/i), {
      target: { value: '2025-07-01' },
    });
    fireEvent.change(screen.getByLabelText(/end date/i), {
      target: { value: '2025-07-15' },
    });

    // Check if preview updates
    expect(await screen.findByText(/2025-07-01/)).toBeInTheDocument();
    expect(screen.getByText(/2025-07-08/)).toBeInTheDocument();
    expect(screen.getByText(/2025-07-15/)).toBeInTheDocument();
  });
});
