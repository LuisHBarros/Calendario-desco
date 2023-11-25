import React from 'react';
import CalendarView from './components/CalendarView';

function CalendarScreen({ startDate, endDate }) {
  return (
    <div>
      <CalendarView
        startDate={startDate}
        endDate={endDate}
        onEventClick={(event) => {
          console.log('Evento clicado:', event);
        }}
      />
    </div>
  );
}

export default CalendarScreen;
