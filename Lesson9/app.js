const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  const data = { userName: name, userEmail: email };

  res.send(data);
});

module.exports = app;
