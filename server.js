projectData = {};

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("website"));

app.get("/getData", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/addData", (req, res) => {
  const { temperature, date, userResponse } = req.body; 

  // Add the received data to projectData
  projectData = {
    temperature: temperature,
    date: date,
    userResponse: userResponse,
  };

  res.send({ message: "Data added successfully", data: projectData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
