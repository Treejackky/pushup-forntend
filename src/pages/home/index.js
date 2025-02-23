import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">AI-Driven Fitness Solutions</h1>
          <p className="mt-2 text-lg">
            ยกระดับการออกกำลังกายด้วยเทคโนโลยีปัญญาประดิษฐ์
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Research on Human Movements Push-Up Counter
          </h2>
          <p className="mb-4 text-gray-700">
            ปฏิวัติวงการฟิตเนสด้วยการนับ push-up แบบเรียลไทม์โดยใช้ MediaPipe และเทคนิค deep learning ที่ให้ความแม่นยำกว่า 90% ในการประเมินท่าทางและประสิทธิภาพการออกกำลังกาย
          </p>
          <p className="mb-6 text-gray-700">
            ร่วมเปลี่ยนแปลงประสบการณ์ออกกำลังกายของคุณ ด้วยระบบวิเคราะห์ท่าทางและ feedback ทันที เพื่อเพิ่มประสิทธิภาพในการฝึกซ้อมและลดการบาดเจ็บ
          </p>
          <a
            href="/monitor"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            เริ่มเลย
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
