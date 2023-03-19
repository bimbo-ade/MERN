const jwt = require("jsonwebtoken");
const Food = require("../models/foodSchema");
const bcrypt = require("bcrypt");
const validator = require("validator");

const getFood = async (req, res) => {};

const postFood = async (req, res) => {
  try {
    let { title, desc, price } = req.body;
    const food = await Food.create({
      title,
      desc,
      price,
    });
    if (food) {
      res.status(201).json({
        _id: food.id,
        title: food.title,
        desc: food.desc,
        price: food.price,
      });
    }
  } catch (error) {
    res.status(500).send({ message: "lol for the catch" });
  }
};
const deleteFood = async (req, res) => {};
const updateFood = async (req, res) => {};

module.exports = { getFood, postFood, deleteFood, updateFood };
