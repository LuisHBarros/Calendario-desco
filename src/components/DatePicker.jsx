import React from 'react';

const DatePicker = ({ startDate, endDate, onSelect }) => {
  return (
    <div>
      <label>Data Inicial:</label>
      <input type="date" value={startDate} onChange={(e) => onSelect({ start: e.target.value, end: endDate })} />

      <label>Data Final:</label>
      <input type="date" value={endDate} onChange={(e) => onSelect({ start: startDate, end: e.target.value })} />
    </div>
  );
};

export default DatePicker;
