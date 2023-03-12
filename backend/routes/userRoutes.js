const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userControllers");

router.get("/signup", signup);
router.post("/login", login);

// A cleaner way to write the above code
// router.route("/").get("/", getMoves).post("/", postMoves);
// router.route("/:id").delete("/:id", deleteMoves).put("/:id", updateMoves);

module.exports = router;
