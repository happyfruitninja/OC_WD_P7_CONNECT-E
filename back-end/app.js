const express = require("express");
const path = require("path");
const userRoutes = require("./routes/user");
const contentRoutes = require("./routes/content");

const app = express("");
app.use(express.json());

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v9wwnqa.mongodb.net/hot_takes`
//   )
//   .then(() => {
//     console.log("Successfully connected to MongoDB Atlas.");
//   })
//   .catch((error) => {
//     console.log("Unable to connect to MongoDB Atlas.");
//     console.error(error);
//   });

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
app.use("/images", express.static(path.join(__dirname, "images")));

//register request
app.use("/api/content", contentRoutes);
app.use("/api/auth", userRoutes);
module.exports = app;