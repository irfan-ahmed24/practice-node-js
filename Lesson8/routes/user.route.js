const express = require("express");
const router = express.Router();

const userData = require("./../Data/user");
const booksData = require("./../Data/books");

router.get("/user", (req, res) => {
  res.send(userData);
});
router.get("/book", (req, res) => {
  res.send(booksData);
});
module.exports = router;
