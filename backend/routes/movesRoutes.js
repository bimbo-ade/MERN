const express = require("express");
const router = express.Router();
const {
  getMoves,
  postMoves,
  deleteMoves,
  updateMoves,
} = require("../controllers/movesControllers");

router.get("/", getMoves);

router.post("/", postMoves);
router.delete("/:id", deleteMoves);
router.put("/:id", updateMoves);

module.exports = router;
