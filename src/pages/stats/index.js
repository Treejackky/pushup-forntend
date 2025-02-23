import React from 'react';

const ProgressStatsPage = () => {
  // ข้อมูลตัวอย่างสำหรับสถิติ progress
  const progressData = {
    totalTasks: 100,
    completedTasks: 75,
    inProgressTasks: 20,
    pendingTasks: 5
  };

  // คำนวณเปอร์เซ็นต์ของงานที่เสร็จสมบูรณ์
  const progressPercent = (progressData.completedTasks / progressData.totalTasks) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Progress & Stats
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card สำหรับแสดงความคืบหน้าโดยรวม */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Overall Progress
            </h2>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className="bg-blue-500 h-6 rounded-full text-center text-white text-sm font-medium"
                style={{ width: `${progressPercent}%` }}
              >
                {progressPercent.toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Card สำหรับแสดงสถิติของงาน */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Task Statistics
            </h2>
            <ul className="text-gray-600">
              <li className="mb-2">
                <span className="font-semibold">Total Tasks:</span> {progressData.totalTasks}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Completed:</span> {progressData.completedTasks}
              </li>
              <li className="mb-2">
                <span className="font-semibold">In Progress:</span> {progressData.inProgressTasks}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Pending:</span> {progressData.pendingTasks}
              </li>
            </ul>
          </div>
        </div>

        {/* Placeholder สำหรับกราฟหรือสถิติเพิ่มเติม */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Additional Charts & Stats
          </h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Chart Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStatsPage;
