// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

// Initialize Express application
const app = express();

// Set port number
const port = 3001;

// Enable CORS (Cross-Origin Resource Sharing) for API access
app.use(cors());

// Parse incoming JSON data in request body
app.use(bodyParser.json());

// Create MySQL connection pool
const db = mysql.createConnection({
  host: 'localhost', // Database host (usually 'localhost' for local server)
  user: 'root', // Database username
  password: 'your_actual_password', // **Replace with your actual password!** (warning: don't store passwords in code)
  database: 'feedback', // Database name
});

// Connect to MySQL database
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database successfully');
  }
});

// **REST API endpoints**

// POST request to add new feedback
app.post('/api/feedback', (req, res) => {
  const { message } = req.body; // Extract message from request body

  // Insert feedback message into 'feedback' table
  db.query('INSERT INTO feedback (message) VALUES (?)', [message], (err, result) => {
    if (err) {
      console.error('Error inserting feedback into database:', err);
      res.status(500).send('Internal Server Error'); // Send error response
    } else {
      res.status(201).send('Feedback added successfully'); // Send success response
    }
  });
});

// GET request to retrieve all feedback messages
app.get('/api/feedback', (req, res) => {
  // Select all feedback messages from 'feedback' table
  db.query('SELECT * FROM feedback', (err, results) => {
    if (err) {
      console.error('Error retrieving feedback from database:', err);
      res.status(500).send('Internal Server Error'); // Send error response
    } else {
      res.json(results); // Send JSON response with all feedback data
    }
  });
});

// **DELETE request to delete a specific feedback by ID**
  db.query('DELETE FROM feedback WHERE id = ?', [feedbackId], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Feedback deleted successfully');
    }
  });
});

// PUT request to update a specific feedback by ID
app.put('/api/feedback/:id', (req, res) => {
  const feedbackId = req.params.id;
  const { message } = req.body;

  db.query('UPDATE feedback SET message = ? WHERE id = ?', [message, feedbackId], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Feedback updated successfully');
    }
  });
});

// Start the server and listen on specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
