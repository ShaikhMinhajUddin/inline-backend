const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

console.log('=== SERVER STARTING ===');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);

const app = express();

// Basic middleware first
app.use(cors());
app.use(bodyParser.json());

// Test route - VERY SIMPLE
app.get('/', (req, res) => {
    console.log('Root route called');
    res.json({ 
        message: 'API is working!',
        timestamp: new Date().toISOString()
    });
});

// Test cutting route
app.get('/api/forms/cutting', (req, res) => {
    console.log('Cutting route called');
    res.json({ 
        message: 'Cutting endpoint',
        data: []
    });
});

// Try to connect MongoDB but don't block server start
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('⚠️ MongoDB Connection Error:', err.message));
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🔗 URL: https://data-production-fc00.up.railway.app`);
});
