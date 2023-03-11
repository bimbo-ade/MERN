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

// A cleaner way to write the above code
// router.route("/").get("/", getMoves).post("/", postMoves);
// router.route("/:id").delete("/:id", deleteMoves).put("/:id", updateMoves);

module.exports = router;
