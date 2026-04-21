const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const server = http.createServer(app);

// Use CORS for cross-origin requests
app.use(cors());

// Parse JSON
app.use(express.json());

// Initialize Socket.io
const io = new Server(server, {
    cors: {
        origin: '*', // Adjust for production
        methods: ['GET', 'POST']
    }
});

// Socket.io connection Event
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// Make io accessible to routers
app.set('socketio', io);

// Basic Route
app.get('/', (req, res) => {
    res.send('Canteen Server is running');
});

// Routes will be added here
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/health', require('./routes/healthRoutes'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
