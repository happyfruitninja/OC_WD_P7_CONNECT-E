// "use strict";
// const { Model } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
//     const Profile = sequelize.define('Profile', {
//       ID: DataTypes.STRING,
//       Username:DataTypes.STRING,
//       email:DataTypes.STRING,
//       password:DataTypes.STRING
//     });
  
//     Profile.associate = (models) => {
//       Profile.belongsTo(models.User);
//     };
  
//     return Profile;
//   };