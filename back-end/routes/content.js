const express = require("express");
const router = express.Router(); //this creates express router
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const contentCtrl = require("../controllers/content");

// router.post("/", auth, multer, contentCtrl.createPost);
// router.get("/", auth, contentCtrl.getAllPosts);
// router.get("/:id", auth, contentCtrl.getOnePost);
// router.put("/:id", auth, multer, contentCtrl.modifyPost);
// router.delete("/:id", auth, contentCtrl.deletePost);
// router.post("/:id/like", auth, contentCtrl.toLike);

module.exports = router;
