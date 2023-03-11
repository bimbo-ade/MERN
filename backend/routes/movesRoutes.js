const express = require("express");
const router = express.Router();

router.get("/api/moves", (req, res) => {
  res.status(200).json({ mssg: "get moves" });
});
