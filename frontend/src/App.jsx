import React, { useState } from 'react';
import VideoRecorder from './components/VideoRecorder';
import { uploadVideo } from './Api/UploadVideo';

const App = () => {
  const [text, setText] = useState('');

  const handleVideoRecorded = async (videoBlob) => {
    try {
      const resultText = await uploadVideo(videoBlob);
      setText(resultText);
    } catch (error) {
      console.error('Error processing video:', error);
    }
  };

  return (
    <div className="App">
      <h1>Video to Text App</h1>
      <VideoRecorder onVideoRecorded={handleVideoRecorded} />
      <div>
        <h2>Text Output:</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;