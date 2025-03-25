const express = require('express');
const userRoutes = require('./routes/users');
const serviceRoutes = require('./routes/services');
const notificationRoutes = require('./routes/notifications');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware for logging
const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: logStream }));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
});

// Middleware
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/notifications', notificationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});