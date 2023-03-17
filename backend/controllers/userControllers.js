//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const jwt = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const validator = require("validator");

const signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    // validating feilds
    if (!email || !password || !name) {
      res.json({ message: "All fields must be filled" });
    }
    if (!validator.isEmail(email)) {
      res.json({ message: "Email not valid" });
    }
    if (!validator.isStrongPassword(password)) {
      res.json({ message: "Password not strong enough" });
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(404).json({ message: "email already  exists lol" });
    }
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
  } catch {
    res.status(500).send({ message: "lol for the catch" });
  }
};

//login
const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // validating feilds
    if (!email || !password) {
      res.json({ message: "All fields must be filled" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res
        .status(401)
        .json({ message: `User with email ${email} does not exist.` });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(400).json({ message: "wrong password" });
    }

    if (match) {
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
