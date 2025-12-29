// server.js - FIXED FOR RAILWAY
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://factory-management-system.vercel.app'],
  credentials: true
}));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB Connection with better error handling
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully');
  console.log('📊 Database:', mongoose.connection.name);
  console.log('🔗 Connection State:', mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
  console.log('⚠️ Check if MONGODB_URI is set in Railway environment variables');
});

// MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ Mongoose disconnected from DB');
});

// Import Routes
const formRoutes = require('./routes/formRoutes');
app.use('/api/forms', formRoutes);

// Test Route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Factory Management System API is running!',
    status: 'active',
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    endpoints: [
      'GET    /api/forms/cutting',
      'POST   /api/forms/cutting',
      'DELETE /api/forms/cutting/all',
      'GET    /api/forms/packing',
      'POST   /api/forms/packing',
      'DELETE /api/forms/packing/all',
      'GET    /api/forms/overlock',
      'POST   /api/forms/overlock',
      'DELETE /api/forms/overlock/all',
      'GET    /api/forms/grading',
      'POST   /api/forms/grading',
      'DELETE /api/forms/grading/all',
      'GET    /api/forms/single-needle',
      'POST   /api/forms/single-needle',
      'DELETE /api/forms/single-needle/all',
      'GET    /api/forms/all-data',
      'GET    /api/forms/dashboard-stats'
    ]
  });
});

// Health check for Railway
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  const statusCodes = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    database: statusCodes[dbStatus] || 'unknown',
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Start Server - FIX FOR RAILWAY
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
  console.log(`🌐 External URL: https://data-production-fc00.up.railway.app`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Database Connection: ${mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Disconnected'}`);
});

// Handle process termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('⚠️ MongoDB connection closed due to app termination');
    process.exit(0);
  });
});