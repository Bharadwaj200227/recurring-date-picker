import React from 'react';

let FrequencySelector = ({ frequency, setFrequency }) => (
  <div className="section">
    <label htmlFor="frequency">Frequency:</label>
    <select id="frequency"value={frequency} onChange={e => setFrequency(e.target.value)}>
      <option value="" disabled>Select Frequency</option>
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
  </div>
);

export default FrequencySelector;
