const express = require("express");
const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDb");
    console.log("DB is connected successfully");
  } catch (error) {
    console.log("Db is not connected");
    console.log(error.massage);
  }
};

const app = express();
app.listen(3001, async () => {
  console.log(`server is running at http://localhost:3001`);
  await DBconnect();
});
