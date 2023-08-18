const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

//implementing signup function
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: "User added successfully!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  });
};

//implementing login function
exports.login = (req, res, next) => {
  User.findOne({ where: { userName: req.body.userName } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: "User not found!",
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: "Incorrect password!",
            });
          }
          const token = jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
            expiresIn: "24h",
          });
          res.status(200).json({
            userId: user.id,
            token: token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error: error.message || error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message || error,
      });
    });
};

// //adding a user profile without a file
// exports.createUser = (req, res, next) => {
//   let requestedUser;
//   if (req.file) {
//     const url = req.protocol + "://" + req.get("host");
//     requestedUser = JSON.parse(req.body.user);
//   } else {
//     requestedUser = req.body;
//   }
//   const user = new User({
//     userName: requestedUser.userName,
//     email: requestedUser.email,
//     userId: requestedUser.userId,
//   });
//   user
//     .save()
//     .then(() => {
//       res.status(201).json({
//         message: "User saved successfully",
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// };

//user account delete function
exports.deleteUser = (req, res, next) => {
  User.findOne({ id: req.params.id }).then((user) => {
    user
      .destroy()
      .then(() => {
        res.status(200).json();
        message: "User deleted successfully";
      })
      .catch((error) => {
        res.status(400).json({ error: error.message || error });
      });
  });
};
