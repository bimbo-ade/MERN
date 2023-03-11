const express = require("express");
const dotenv = require("dotenv").config();

const movesRoutes = require("./routes/movesRoutes");
const port = process.env.PORT;
const app = express();

app.use("/api/moves", movesRoutes);

app.listen(port, () => console.log(`server staterd on ${port}`));
