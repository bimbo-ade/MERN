const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/userControllers");

//A cleaner way to write the above code
router.route("/").get("/", getFood).post("/", postFood);
router.route("/:id").delete("/:id", deleteFood).put("/:id", updateFood);

module.exports = router;
