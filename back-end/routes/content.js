const express = require("express");
const router = express.Router(); //this creates express router
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const contentCtrl = require("../controllers/content");


module.exports = router;
