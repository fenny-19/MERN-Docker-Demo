const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hurray fenny, Api is running!!!</h1>");
});

module.exports = router;
