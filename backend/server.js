const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const movesRoutes = require("./routes/movesRoutes");
const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/api/moves", movesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`server staterd on ${port}`));
  })
  .catch((error) => console.log(error));
