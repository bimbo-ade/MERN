//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const jwt = requite("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

const signup = (req, res) => {
  const { email, password, name } = req.body;

  //making sure all feilds have a value
  if (!name || !email || !password) {
    res.status(400);
    console.log("fill all feilds");
  }

  //mongoose method schema stuvv
  const userExists = User.findOne({ email });

  if (userExists) {
    res.status(400);
    console.log("email in use");
  }

  //hashing password
  const salt = bcrypt.genSalt(10);
  const hashPassword = bcrypt.hash(password, salt);

  // creating user

  const user = new User({
    name,
    email,
    password,
  });
};
const login = (req, res) => {
  res.status(200).json({ mssg: "post moves" });
};

module.exports = { signup, login };
