const express = require("express");
const app = express();
const cookiePrser = require("cookie-parser");

require("dotenv").config({ path: "backend/config/config.env" });

//using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePrser());

//importing routes
const post = require("./Routes/Post");
const user = require("./Routes/User");

//using routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;
