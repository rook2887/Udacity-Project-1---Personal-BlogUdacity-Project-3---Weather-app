projectData = {};

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("website"));

app.get("/getData", (req, res) => {
  res.send("Hello, Express!");
});

//tested with Postman
app.post("/addData", (req, res) => {
  const { temperature, date, userResponse } = req.body;

  // Add the received data to projectData
  projectData = {
    temperature,
    date,
    userResponse,
  };

  res.send({ message: "Data added successfully", data: projectData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
