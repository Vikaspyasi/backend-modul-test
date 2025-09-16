const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/user-routes');
const bookRoutes = require('./routes/book-routes');

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});