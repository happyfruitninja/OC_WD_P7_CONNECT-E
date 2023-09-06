"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init(
    {
      post: DataTypes.STRING(512),
      mediaUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      usersRead: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
