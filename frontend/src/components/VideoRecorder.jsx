import React, { useRef, useState } from 'react';

const VideoRecorder = ({ onVideoRecorded }) => {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);

  const startRecording = async () => {
    setRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();

    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        const url = URL.createObjectURL(event.data);
        setVideoUrl(url);
        onVideoRecorded(event.data);
      }
    };
    mediaRecorderRef.current.start();
  };

  const stopRecording = () => {
    setRecording(false);
    mediaRecorderRef.current.stop();
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
  };

  return (
    <div>
      <video ref={videoRef} width="400" height="300" autoPlay muted />
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {videoUrl && <video src={videoUrl} controls width="400" height="300" />}
    </div>
  );
};

export default VideoRecorder;