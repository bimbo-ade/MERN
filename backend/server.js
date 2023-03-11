const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.get("/api/moves", (req, res) => {
  res.json({ mssg: "get moves" });
});
app.listen(port, () => console.log(`server staterd on ${port}`));
