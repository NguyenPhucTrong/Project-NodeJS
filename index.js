const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfully"))
  .catch((err) => {
    console.log(err);
  });

app.get("/api/test", () => {
  console.log("Test is Successfully");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Sever is running 8080");
});
