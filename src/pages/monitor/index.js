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
    // Access camera when component mounts
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

    // Cleanup on component unmount
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
    <div>

      {hasCamera ? (
        <div>
          <video ref={videoRef} autoPlay playsInline />
          <div>
            {isRecording ? (
              <button onClick={stopRecording}>Stop Recording</button>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
          </div>
        </div>
      ) : (
        <p>No camera available</p>
      )}

      {videoURL && (
        <div>
          <h3>Recorded Video:</h3>
          <video src={videoURL} controls />
          <button onClick={UploadVideo}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;