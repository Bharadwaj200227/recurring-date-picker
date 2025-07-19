import React from 'react';

let CalendarPreview = ({ dates }) => (
  <div className="section preview">
    <h4>Generated Dates:</h4>
    {dates.length === 0 ? (
      <p>No dates selected</p>
    ) : (
      <ul>
        {dates.map((date, i) => (
          <li key={i}>{date}</li>
        ))}
      </ul>
    )}
  </div>
);

export default CalendarPreview;
