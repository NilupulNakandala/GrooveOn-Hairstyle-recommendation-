const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const mysql = require("mysql2");

const mysql = require('mysql');



const app = express();
//const PORT = process.env.PORT || 5000;
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mySQL@123",//password for the local sql server
  database: "feedback",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the database");
  }
});
//guys, create a table in mysql "feedback" 
//run this command --> CREATE TABLE feedback (id INT AUTO_INCREMENT PRIMARY KEY, message TEXT);



// Get reviews endpoint
app.get("/api/reviews", (req, res) => {
  db.query("SELECT * FROM reviews", (err, results) => {
    if (err) {
      console.error("Error fetching reviews:", err.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

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

  if (newReview.user && newReview.comment) {
    db.query(
      "INSERT INTO reviews (user, rating, comment) VALUES (?, ?, ?)",
      [newReview.user, newReview.rating, newReview.comment],
      (err, result) => {
        if (err) {
          console.error("Error adding review:", err.message);
          res.status(500).json({ error: "Internal server error" });
        } else {
          newReview.id = result.insertId;
          res.status(201).json(newReview);
        }
      }
    );
  } else {
    res.status(400).json({ error: "Invalid review data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
