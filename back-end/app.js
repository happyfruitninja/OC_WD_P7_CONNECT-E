const express = require("express");
const Sequelize = require("sequelize");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const path = require("path");

const app = express("");
app.use(express.json());

//connect to database using sequelize -> see models/index.js

//a middleware function that sets necessary headers to enabling CORS in express

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//allow users access to static resources such as images
//app.use("/images", express.static(path.join(__dirname, "images")));

//register request
//app.use(express.static("images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/post", postRoutes);
app.use("/api/auth", userRoutes);
module.exports = app;
