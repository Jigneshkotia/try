// src/routes/videoRoutes.js

const express = require('express');
const multer = require('multer');
const { processVideo } = require('../model/processVideo');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/process-video', upload.single('video'), async (req, res) => {
  try {
    const videoBuffer = req.file.buffer;
    const text = await processVideo(videoBuffer); // Process the video and get the text
    res.json({ text });
  } catch (error) {
    console.error('Error processing video:', error);
    res.status(500).json({ error: 'Failed to process video' });
  }
});

module.exports = router;