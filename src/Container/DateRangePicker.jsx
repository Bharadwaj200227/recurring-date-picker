import React from 'react';

let DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => (
  <div className="section">
   <label htmlFor="start-date">Start Date:</label>
<input id="start-date" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />

    <label htmlFor='end-date'>End Date:</label>
    <input id="end-date"type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
  </div>
);

export default DateRangePicker;
