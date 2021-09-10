const express = require("express");
const app = express();
const router = require("./routes/books");
require("dotenv").config();
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("database connected successfully");
});

app.use("/api", router);

app.get("/api", (req, res) => {
  res.send("welcome to bookhouse");
});

const port = process.env.PORT;
app.listen(port || 3000, () => {
  console.log(`app started on port ${port} `);
});
