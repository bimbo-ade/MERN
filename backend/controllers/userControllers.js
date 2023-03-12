//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const jwt = requite("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

const signup = (req, res) => {
  let { email, password, name } = req.body;
  //mongoose method schema stuvv
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.json({ error });
    } else {
      const user = new User({
        mae: name,
      });
    }
  });
};

const login = (req, res) => {
  res.status(200).json({ mssg: "post moves" });
};

module.exports = { signup, login };
