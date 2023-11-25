import React, { useState } from 'react';
import PeriodSelectionScreen from './PeriodSelectionScreen';
import CalendarScreen from './CalendarScreen';

function App() {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  return (
    <div>
      <PeriodSelectionScreen
        selectedStartDate={selectedStartDate}
        selectedEndDate={selectedEndDate}
        onSelectDates={(start, end) => {
          setSelectedStartDate(start);
          setSelectedEndDate(end);
        }}
      />

      <CalendarScreen startDate={selectedStartDate} endDate={selectedEndDate} />
    </div>
  );
}

export default App;
