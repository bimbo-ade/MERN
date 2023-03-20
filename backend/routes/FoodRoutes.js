const express = require("express");
const router = express.Router();
const {
  getFood,
  postFood,
  deleteFood,
  updateFood,
} = require("../controllers/foodControllers");

router.get("/", getFood);
router.post("/", postFood);
router.post("/:id", deleteFood);
router.post("/:id", updateFood);
//A cleaner way to write the above code
// router.route("/").get("/", getFood).post("/", postFood);
// router.route("/:id").delete("/:id", deleteFood).put("/:id", updateFood);

module.exports = router;
