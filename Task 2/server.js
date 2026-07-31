const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const notesRouter = require('./routes/notes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notes_app';

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'Notes API is running' });
});

app.use('/api/notes', notesRouter);

app.use('/api', (_req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.status || 500).json({
    success: false,
    message: error.message || 'Internal server error'
  });
});

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`Notes App running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed.');
    console.error(error.message);
    console.error('Start local MongoDB or use a valid MongoDB Atlas URI in .env');
    process.exit(1);
  }
}

startServer();
