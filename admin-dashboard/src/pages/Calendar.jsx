import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // default styles

export default function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Calendar</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p className="mt-4 text-center">Selected date: {date.toDateString()}</p>
    </div>
  );
}
