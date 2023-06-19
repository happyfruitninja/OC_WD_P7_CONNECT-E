const express = require("express");
const router = express.Router(); //this creates express router
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const contentCtrl = require("../controllers/content");

router.post("/", auth, multer, contentCtrl.createContent); //create content
router.get("/", auth, contentCtrl.getAllContent); //show all content
router.put("/:id", auth, multer, contentCtrl.modifyContent); //edit text or reload multimedia
router.delete("/:id", auth, contentCtrl.deleteContent); //delete text or multimedia


module.exports = router;
