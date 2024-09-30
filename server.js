projectData = {};

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (optional, for JSON parsing)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("website"));

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
