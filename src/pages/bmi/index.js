import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      // แปลงส่วนสูงจากเซนติเมตรเป็นเมตร
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // กำหนดคำแนะนำตามค่า BMI
      if (bmiValue < 18.5) {
        setMessage('น้ำหนักน้อย/ผอม');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('น้ำหนักปกติ');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage('เริ่มมีภาวะอ้วน');
      } else {
        setMessage('อ้วน');
      }
    }
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="block text-gray-700 text-2xl font-bold mb-6 text-center">BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
              น้ำหนัก (kg)
            </label>
            <input
              id="weight"
              type="number"
              placeholder="ใส่น้ำหนักเป็น kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
              ส่วนสูง (cm)
            </label>
            <input
              id="height"
              type="number"
              placeholder="ใส่ส่วนสูงเป็น cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              คำนวณ
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              รีเซ็ต
            </button>
          </div>
        </form>
        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-700">BMI ของคุณ: {bmi}</p>
            <p className="text-gray-600">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
