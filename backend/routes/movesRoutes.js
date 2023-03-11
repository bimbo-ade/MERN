const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "get moves" });
});

router.post("/", (req, res) => {
  res.status(200).json({ mssg: "post moves" });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ mssg: "delete moves" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ mssg: "update moves" });
});

module.exports = router;
