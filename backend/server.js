const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json());

app.use("/api/user", userRoutes);

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => console.log(`server staterd on ${port}`));
