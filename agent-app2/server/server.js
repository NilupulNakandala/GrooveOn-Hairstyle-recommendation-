<<<<<<< Updated upstream
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const mysql = require("mysql2");

const mysql = require('mysql');



const app = express();
//const PORT = process.env.PORT || 5000;
=======
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
>>>>>>> Stashed changes
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
<<<<<<< Updated upstream
  host: "localhost",
  user: "root",
  password: "mySQL@123",//password for the local sql server
  database: "feedback",
=======
  host: 'localhost',
  user: 'root',
  password: 'shevin123',
  database: 'feedback',
>>>>>>> Stashed changes
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});
//guys, create a table in mysql "feedback" 
//run this command --> CREATE TABLE feedback (id INT AUTO_INCREMENT PRIMARY KEY, message TEXT);



// Create a feedback table in MySQL (run this SQL query in your MySQL client)
// CREATE TABLE feedback (id INT AUTO_INCREMENT PRIMARY KEY, message TEXT);

// REST API endpoints
app.post('/api/feedback', (req, res) => {
  const { message } = req.body;

  db.query('INSERT INTO feedback (message) VALUES (?)', [message], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Feedback added successfully');
    }
  });
});

app.get('/api/feedback', (req, res) => {
  db.query('SELECT * FROM feedback', (err, results) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

<<<<<<< Updated upstream
// REST API endpoints  --sql code end with comment mySQL@123
app.post('/api/feedback', (req, res) => {
  const { message } = req.body;

  db.query('INSERT INTO feedback (message) VALUES (?)', [message], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Feedback added successfully');
    }
  });
});
app.get('/api/feedback', (req, res) => {
  db.query('SELECT * FROM feedback', (err, results) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
}); 
app.delete('/api/feedback/:id', (req, res) => {
  const feedbackId = req.params.id;

  db.query('DELETE FROM feedback WHERE id = ?', [feedbackId], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Feedback deleted successfully');
    }
  });
});
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
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// mySQL code endpoint -- mySQL@123

// Add review endpoint
app.post("/api/reviews", (req, res) => {
  const newReview = req.body;
=======
app.delete('/api/feedback/:id', (req, res) => {
  const feedbackId = req.params.id;
>>>>>>> Stashed changes

  db.query('DELETE FROM feedback WHERE id = ?', [feedbackId], (err, result) => {
    if (err) {
      console.error('MySQL query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Feedback deleted successfully');
    }
  });
});

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});