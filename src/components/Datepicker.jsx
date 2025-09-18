import React, { useState, useMemo } from 'react';

export default function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : '';
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1);

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      });
    }

    const thisMonthDays = daysInMonth(currentYear, currentMonth);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth, i), otherMonth: false });
    }

    const nextDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= nextDays; i++) {
      days.push({ date: new Date(currentYear, currentMonth + 1, i), otherMonth: true });
    }
    return days;
  }, [currentMonth, currentYear]);

  const currentMonthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const toggleCalendar = () => setShowCalendar(v => !v);

  const prevMonth = () => {
    setCurrentMonth(m => {
      if (m === 0) {
        setCurrentYear(y => y - 1);
        return 11;
      }
      return m - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonth(m => {
      if (m === 11) {
        setCurrentYear(y => y + 1);
        return 0;
      }
      return m + 1;
    });
  };

  const isSelected = (day) => selectedDate && day.date.toDateString() === selectedDate.toDateString();

  const selectDate = (day) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
  };

  return (
    <div className="relative inline-block text-sm">
      <div className="relative">
        <input
          type="text"
          readOnly
          value={formattedDate}
          onClick={toggleCalendar}
          placeholder="Select date"
          className={`w-48 pl-3 pr-10 py-2 rounded-md border shadow-sm cursor-pointer bg-white/90 backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${showCalendar ? 'ring-2 ring-blue-400' : ''}`}
        />
        <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1ZM22 11H2v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7ZM8 14a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Zm5 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1Z" />
          </svg>
        </span>
      </div>
      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 min-w-[18rem] bg-white/95 backdrop-blur border border-gray-200 rounded-xl shadow-xl ring-1 ring-black/5 z-50 p-4 animate-in fade-in zoom-in-95 origin-top">
          <div className="flex justify-between items-center mb-3 select-none text-gray-700">
            <button onClick={prevMonth} className="p-2 rounded-md hover:bg-gray-100 active:bg-gray-200 transition" aria-label="Previous month">&lt;</button>
            <span className="font-semibold tracking-wide">{currentMonthName} {currentYear}</span>
            <button onClick={nextMonth} className="p-2 rounded-md hover:bg-gray-100 active:bg-gray-200 transition" aria-label="Next month">&gt;</button>
          </div>
          <div className="grid grid-cols-7 text-center mb-1 text-[0.7rem] uppercase font-semibold text-gray-500 tracking-wide">
            {weekdays.map(d => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 text-center gap-y-1">
            {calendarDays.map(day => {
              const base = 'mx-auto w-8 h-8 flex items-center justify-center rounded-full text-sm select-none transition';
              const selected = isSelected(day) ? 'bg-blue-600 text-white shadow ring-2 ring-blue-400 ring-offset-2 ring-offset-white' : '';
              const other = day.otherMonth ? 'text-gray-300' : '';
              const today = !day.otherMonth && day.date.toDateString() === new Date().toDateString() && !isSelected(day) ? 'text-blue-600 font-semibold ring-1 ring-blue-300' : '';
              const hover = !day.otherMonth && !isSelected(day) ? 'hover:bg-blue-100' : '';
              return (
                <button
                  type="button"
                  key={day.date.toISOString() + (day.otherMonth ? '-o' : '')}
                  onClick={() => selectDate(day)}
                  disabled={day.otherMonth}
                  className={[base, selected, other, today, hover, day.otherMonth ? 'cursor-default' : 'cursor-pointer'].join(' ')}
                >
                  {day.date.getDate()}
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <button onClick={() => { setSelectedDate(null); }} className="text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition">Clear</button>
            <button onClick={() => setShowCalendar(false)} className="text-xs px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition shadow">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
