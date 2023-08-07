const { User } = require("../models/index");
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
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error("User not found!"),
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error("Incorrect password!"),
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
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

//adding a user profile without a file
// exports.createUser = (req, res, next) => {
//   let imageUrl = null;
//   let requestedUser;
//   if (req.file) {
//     const url = req.protocol + "://" + req.get("host");
//     requestedUser = JSON.parse(req.body.user);
//     imageUrl = url + "/images/" + req.file.filename;
//   } else {
//     requestedUser = req.body;
//   }
//   const user = new User({
//     Username: requestedUser.userName,
//     email: requestedUser.email,
//     imageUrl,
//     userId: requestedSauce.userId,
//   });
//   user
//     .save()
//     .then(() => {
//       res.status(201).json({
//         message: "Sauce saved successfully",
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
  User.findOne({ userId: req.params.id }).then((user) => {
    const filename = userProfile.imageUrl.split("/images/")[1];
    fs.unlink("images/" + filename, () => {
      User.deleteOne({
        userId: req.params.id,
      })
        .then(() => {
          res.status(200).json();
          message: "Deleted";
        })
        .catch((error) => {
          res.status(400).json({ error: error.message || error });
        });
    });
  });
};
