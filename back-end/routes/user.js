const express = require("express");
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
// router.delete("/:id", auth, userCtrl.deleteUser);
module.exports = router;
