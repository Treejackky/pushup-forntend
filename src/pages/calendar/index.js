import React, { useState } from 'react';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // คำนวณวันแรกของเดือนและจำนวนวันในเดือน
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // สร้างอาร์เรย์สำหรับ cell ของปฏิทิน (เติมช่องว่างสำหรับวันที่ก่อนหน้า)
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header สำหรับเปลี่ยนเดือน */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevMonth}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Prev
          </button>
          <h1 className="text-2xl font-bold text-gray-800">WorkPlan Calendar</h1>
          <button
            onClick={handleNextMonth}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
        {/* แสดงเดือนและปี */}
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              year: 'numeric'
            }).format(currentDate)}
          </h2>
        </div>
        {/* ปฏิทินแบบ Grid */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="font-semibold text-gray-700">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className="h-20 border border-gray-200 flex items-center justify-center"
            >
              {day ? day : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
