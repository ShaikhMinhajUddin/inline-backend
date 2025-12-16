const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Import Routes
const formRoutes = require('./routes/formRoutes');
app.use('/api/forms', formRoutes);

// Test Route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Factory Management System API is running!',
        status: 'active',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        baseUrl: `https://${req.get('host')}`,
        endpoints: [
            '/api/forms/cutting',
            '/api/forms/packing',
            '/api/forms/overlock', 
            '/api/forms/grading',
            '/api/forms/single-needle',
            '/api/forms/all-data',
            '/api/forms/dashboard-stats'
        ]
    });
});

// Health check for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Start Server - FIX FOR RAILWAY
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Railway requires this, NOT localhost

app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT}`);
    console.log(`🌐 External URL: https://data-production-fc00.up.railway.app`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});