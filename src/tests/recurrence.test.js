import { describe, expect, it } from "vitest";
import { generateRecurringDates } from "../Utilities/recurrenceUtilities";

describe('generateRecurringDates', () => {
  it('generates daily recurring dates', () => {
    const start = '2025-07-01';
    const end = '2025-07-05';
    const custom = { weekday: 'Tuesday' };
    const result = generateRecurringDates(start, end, 'daily',custom);

    expect(result).toEqual([
      '2025-07-01',
      '2025-07-02',
      '2025-07-03',
      '2025-07-04',
      '2025-07-05',
    ]);
  });

  it('generates weekly recurring dates', () => {
    const start = '2025-07-01';
    const end = '2025-07-22';
    const custom = { weekday: 'Tuesday' };
    const result = generateRecurringDates(start, end, 'weekly',custom);

    expect(result).toEqual([
      '2025-07-01',
      '2025-07-08',
      '2025-07-15',
      '2025-07-22',
    ]);
  });

  it('returns empty array for invalid dates', () => {
    const result = generateRecurringDates('', '', 'weekly');
    expect(result).toEqual([]);
  });
});