const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Database connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abcd@12341234",
  database: "GrooveON",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the database");
  }
});

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
