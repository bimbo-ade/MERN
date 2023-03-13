//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const jwt = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // validating feilds
    let errors = [];
    if (!name) {
      errors.push({ name: "required" });
    }
    if (!email) {
      errors.push({ email: "required" });
    }
    if (!emailRegexp.test(email)) {
      errors.push({ email: "invalid" });
    }
    if (!password) {
      errors.push({ password: "required" });
    }
    if (errors.length > 0) {
      return res.status(422).json({ errors: errors });
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.json({ message: "email already  exists lol" });
    } else {
      //hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //creating new user if no user exists
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        });
      }
    }
  } catch {
    res.status(500).send({ message: "lol for the catch" });
  }
};

//login
const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    let errors = [];
    if (!email) {
      errors.push({ email: "required" });
    }
    if (!emailRegexp.test(email)) {
      errors.push({ email: "invalid email" });
    }
    if (!password) {
      errors.push({ passowrd: "required" });
    }
    if (errors.length > 0) {
      return res.status(422).json({ errors: errors });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ msg: `User with email ${email} does not exist.` });
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).send({ message: "lol for the catch" });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = { signup, login };
