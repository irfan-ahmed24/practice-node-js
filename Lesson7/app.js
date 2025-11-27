const express = require("express");
const app = express();
const userRouter = require("./Routes/user.route");
app.use("/user", userRouter);

app.use((req, res) => {
  res.send("<h1>404 not found</h1>");
});

module.exports = app;
