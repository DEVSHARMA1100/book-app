const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/bookdb')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const bookRoutes = require('./routes/books');
app.use('/api/books', bookRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});