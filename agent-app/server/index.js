// Import express module to create a web server
import express from 'express';

// Import the sample route handler
import SampleRoute from './routes/sample.route.js';

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON data in request body
app.use(express.json());

// Mount the SampleRoute for requests to '/get-item' path
app.use('/get-item', SampleRoute);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server Started. App is running on port 3000');
});
