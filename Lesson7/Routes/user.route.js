const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is response from server at home route");
});
router.post("/", (req, res) => {
  res.send("this is post request from server to home route");
});
router.put("/", (req, res) => {
  res.send("this is put request from server to home route");
});
router.delete("/", (req, res) => {
  res.send("this is delete request from server to home route");
});

module.exports = router;
