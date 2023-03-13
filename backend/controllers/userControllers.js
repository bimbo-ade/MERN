//so basically this controller is the function the CRUD wants to perfom
// instead of having it in the routes folder, we create its own folder
//and then export it and call it in the routes folder

const jwt = requite("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const { createJWT } = require("../utils/auth");

const signup = (req, res) => {
  //making sure all feilds have a value
  if (!name || !email || !password) {
    res.status(400);
    console.log("fill all feilds");
  }

  let { name, email, password, password_confirmation } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new User({
          name: name,
          email: email,
          password: password,
        });
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,
                });
              })
              .catch((err) => {
                res.status(500).json({
                  errors: [{ error: err }],
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }],
      });
    });
};

//login
const login = (req, res) => {
  exports.signin = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            errors: [{ user: "not found" }],
          });
        } else {
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (!isMatch) {
                return res
                  .status(400)
                  .json({ errors: [{ password: "incorrect" }] });
              }
              let access_token = createJWT(user.email, user._id, 3600);
              jwt.verify(
                access_token,
                process.env.TOKEN_SECRET,
                (err, decoded) => {
                  if (err) {
                    res.status(500).json({ erros: err });
                  }
                  if (decoded) {
                    return res.status(200).json({
                      success: true,
                      token: access_token,
                      message: user,
                    });
                  }
                }
              );
            })
            .catch((err) => {
              res.status(500).json({ erros: err });
            });
        }
      })
      .catch((err) => {
        res.status(500).json({ erros: err });
      });
  };
};

module.exports = { signup, login };
