const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const authRoutes = require('./controllers/authController');
const courseRoutes = require('./controllers/courseController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/course', courseRoutes);

module.exports.handler = serverless(app);
