import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const VideoRecorder = () => {
  const [hasCamera, setHasCamera] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [videoURL, setVideoURL] = useState('');
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);

  useEffect(() => {
    // เข้าถึงกล้องเมื่อ component ถูก mount
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setHasCamera(true);
        videoRef.current.srcObject = stream;

        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          recordedChunks.current.push(event.data);
        };
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
          const url = URL.createObjectURL(blob);
          setVideoURL(url);
        };
      } catch (error) {
        console.error("Error accessing the camera", error);
      }
    };

    getCameraStream();

    // Cleanup เมื่อ component ถูก unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const startRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const UploadVideo = async () => {
    if (!videoURL) return;

    const formData = new FormData();
    const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
    const file = new File([blob], 'video.webm', { type: 'video/webm' });

    formData.append('video', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Video uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Video Recorder</h1>

        {hasCamera ? (
          <div className="flex flex-col items-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full max-w-md rounded-md border border-gray-300 mb-4"
            />
            <div className="mb-4">
              {isRecording ? (
                <button
                  onClick={stopRecording}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                >
                  Stop Recording
                </button>
              ) : (
                <button
                  onClick={startRecording}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                >
                  Start Recording
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">No camera available</p>
        )}

        {videoURL && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Recorded Video:</h3>
            <video
              src={videoURL}
              controls
              className="w-full max-w-md rounded-md border border-gray-300 mb-4"
            />
            <button
              onClick={UploadVideo}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
