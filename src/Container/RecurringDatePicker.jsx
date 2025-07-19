import React, { useState } from 'react';
import { generateRecurringDates } from '../Utilities/recurrenceUtilities';
import FrequencySelector from './FrequencySelector';
import CustomizationPanel from "./CustomizationPanel"
import DateRangePicker from './DateRangePicker';
import CalendarPreview from './CalendarPreview';
import '../App.css';

let RecurringDatePicker = () => {
  let [frequency, setFrequency] = useState('');
  let [custom, setCustom] = useState({});
  let [startDate, setStartDate] = useState('');
  let [endDate, setEndDate] = useState('');

  let dates = generateRecurringDates(startDate, endDate, frequency, custom);

  return (
    <div className="outlet">
      <h2>Recurring Date Picker</h2>
      <FrequencySelector frequency={frequency} setFrequency={setFrequency} />
      <CustomizationPanel frequency={frequency} custom={custom} setCustom={setCustom} />
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <CalendarPreview dates={dates} />
    </div>
  );
};

export default RecurringDatePicker;
