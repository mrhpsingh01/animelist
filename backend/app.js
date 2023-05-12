// Import required modules
const express = require("express"); // Express framework for building web applications
const connectDB = require("./database/connect"); // Custom module to connect to the database
const cors = require("cors"); // Middleware for enabling Cross-Origin Resource Sharing
const dotenv = require("dotenv"); // Module to load environment variables
const morgan = require("morgan"); // HTTP request logger middleware
const bodyparser = require("body-parser"); // Middleware to parse request bodies

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Set up middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(morgan("tiny")); // Log HTTP requests
app.use(bodyparser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Define the port on which the server will listen
const port = process.env.API_PORT;

// Connect to the database
connectDB();

// Set up routes
app.use("/", require("./routes/router")); // Use the router module for handling routes

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
