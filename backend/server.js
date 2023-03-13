const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const port = process.env.PORT;
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(port, () => console.log(`server staterd on ${port}`));
