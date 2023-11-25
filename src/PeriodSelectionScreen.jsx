import React, { useState } from 'react';
import DatePicker from './components/DatePicker';

function PeriodSelectionScreen() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  return (
    <div>
      <DatePicker
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        onSelect={(selectedDate) => {
          setSelectedStartDate(selectedDate.start);
          setSelectedEndDate(selectedDate.end);
        }}
      />
    </div>
  );
}

export default PeriodSelectionScreen;
