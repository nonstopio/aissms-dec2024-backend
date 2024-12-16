const express = require('express');
const app = express();
const connectDB = require('./db');
const bookRoutes = require('./routes/bookRoutes');

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to My Node.js Project!');
});

app.use('/api/book', bookRoutes);

// Example API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is your data!', timestamp: new Date() });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
