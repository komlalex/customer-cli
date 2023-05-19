const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("colors");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 1998
//Connect DB
connectDB();
  


app.listen(port, () => console.log(`Server started on port: ${port}`))