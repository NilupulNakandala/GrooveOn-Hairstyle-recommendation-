import express from 'express'
import SampleRoute from './routes/sample.route.js'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
const port = 3001;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'groove'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected');
  });

// Middleware to parse JSON bodies
app.use(express.json());

// CORS Middleware
app.use(cors());

// Route to handle POST request to save message
app.post('/api/feedback', (req, res) => {
  const {  FullName, UserPhone, Subject, Message, Timestamp } = req.body;
  const INSERT_FEEDBACK_QUERY = 'INSERT INTO queries ( FullName, UserPhone, Subject, Message, Timestamp) VALUES ( ?, ?, ?, ?, ?)';
  db.query(INSERT_FEEDBACK_QUERY, [ FullName, UserPhone, Subject, Message, Timestamp], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Message saved successfully' });
    }
  });
});



app.post('/api/reviews', (req, res) => {
    const {  ReviewID, UserID, HairstyleID, Rating, ReviewText } = req.body;
    const INSERT_FEEDBACK_QUERY = 'INSERT INTO reviews ( ReviewID, UserID, HairstyleID, Rating, ReviewText) VALUES ( ?, ?, ?, ?, ?)';
    db.query(INSERT_FEEDBACK_QUERY, [ ReviewID, UserID, HairstyleID, Rating, ReviewText], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ message: 'Message saved successfully' });
      }
    });
  });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





app.use(express.json())

app.use('/get-item', SampleRoute)

// app.listen(3001, () => {
//     console.log('Server Started. App is running on port 3001')
// })
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/get-item/res', (req, res) =>{
    res.send("stdout: round");
});