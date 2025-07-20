import React from 'react';

let CustomizationPanel = ({ frequency, custom, setCustom }) => {
  let handleChange = e => {
    setCustom(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="section">
      {custom.day && custom.nth && custom.weekday && (
        <p style={{ color: 'red', fontSize: '0.9rem' }}>
          ⚠️ Please choose either "Day of Month" or "Nth Weekday", not both.
        </p>
      )}
      {frequency === 'weekly' && (
        <>
          <label htmlFor='weekday'>Weekday:</label>
          <input
            id="weekday"
            type="text"
            name="weekday"
            value={custom.weekday || ''}
            onChange={handleChange}
            placeholder="e.g. Monday"
          />
        </>
      )}

      {frequency === 'monthly' && (
        <>
          <label>Day of Month (Optional):</label>
          <input
            name="day"
            type="number"
            min="1"
            max="31"
            value={custom.day || ''}
            onChange={handleChange}
            placeholder="e.g. 15"
          />

          <label>Weekday (Optional for Pattern):</label>
          <select name="weekday" value={custom.weekday || ''} onChange={handleChange}>
            <option value="" disabled>Select Weekday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <label>Nth Occurrence (Optional):</label>
          <select name="nth" value={custom.nth || ''} onChange={handleChange}>
            <option value="">Select Nth</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
          </select>
        </>
      )}
    </div>
  );
};

export default CustomizationPanel;
