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
    console.log("fill all feilds");
  }

  //mongoose method schema stuvv
  const userExists = User.findOne({ email }).then((user) => {
    if (user) {
      return res.json({ error });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
      });
      //hashing password
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password);
      });
    }
  });
};

const login = (req, res) => {
  res.status(200).json({ mssg: "post moves" });
};

module.exports = { signup, login };
