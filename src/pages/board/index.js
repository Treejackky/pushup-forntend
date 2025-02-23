import React, { useState, useEffect } from 'react';

const LeaderboardPage = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // จำลอง API call ด้วยข้อมูลตัวอย่าง
    const mockData = [
      { id: 1, username: 'Alice', score: 2500 },
      { id: 2, username: 'Bob', score: 2400 },
      { id: 3, username: 'Charlie', score: 2300 },
      { id: 4, username: 'David', score: 2200 }
    ];
    
    setTimeout(() => {
      setLeaders(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Leaderboard
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="py-3 px-6 text-left">Rank</th>
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Score</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {leaders.map((leader, index) => (
                <tr
                  key={leader.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {leader.username}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {leader.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
