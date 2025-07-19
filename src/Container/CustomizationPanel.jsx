import React from 'react';

let CustomizationPanel = ({ frequency, custom, setCustom }) => {
  let handleChange = e => {
    setCustom(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="section">
      {frequency === 'weekly' && (
        <>
          <label htmlFor='weekday'>Weekday:</label>
          <input id="weekday"type="text"name="weekday"value={custom.weekday || ''}onChange={handleChange}placeholder="e.g. Monday"
          />
        </>
      )}
      {frequency === 'monthly' && (
        <>
          <label >Day of Month:</label>
          <input name="day"type="number" min="1"max="31" value={custom.day ||''}onChange={handleChange}
          />
        </>
      )}
    </div>
  );
};

export default CustomizationPanel;
