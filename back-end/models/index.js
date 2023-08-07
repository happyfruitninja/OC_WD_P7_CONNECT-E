"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};
const database = process.env.DB_NAME; //DB_NAME = groupmania_dev. process.env is a way to access env variable in the code. .env helps to keep user credentials out of code and store it in the environment for security
const username = process.env.DB_USERNAME; //DB_USERNAME
const password = process.env.DB_PASSWORD; //DB_PASSWORD

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(database, username, password, config);
}

//sequelize.sync with force or alter detects any changes made to your model and updates the database
if ("development" === env) {
  sequelize.sync({ alter: true });
  console.log("All tabels are up todate.");
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })

  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
