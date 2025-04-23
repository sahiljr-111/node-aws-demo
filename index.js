const express = require('express');
const app = express();
require('dotenv').config();


// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
