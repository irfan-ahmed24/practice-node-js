const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = 3.1416 * radius * radius;
  res.json({
    radius: radius,
    area: area,
  });
});

module.exports = app;
