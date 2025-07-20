import React from 'react';

let CalendarPreview = ({ dates }) => (
  <div className="section calendar-preview">
    <h4>Generated Dates:</h4>
    {dates.length === 0 ? (
      <p>No dates selected</p>
    ) : (
      <div className="date-grid">
        {dates.map((date, i) => (
          <div key={i} className="date-item">
            📅 {date}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default CalendarPreview;
