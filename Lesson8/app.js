const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("this is home page");
});
app.use(userRouter);
app.use((req, res) => {
  res.send("404 not found");
});

module.exports = app;
