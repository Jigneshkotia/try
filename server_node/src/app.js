// src/app.js

const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

app.use('/api', videoRoutes); // Use video routes under /api path

module.exports = app;