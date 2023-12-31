"use strict";
const { Model } = require("sequelize");

//schema
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      userName: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
