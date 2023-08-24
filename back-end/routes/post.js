const express = require("express");
const router = express.Router(); //this creates express router
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/post");

router.post("/", auth, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.delete("/:id", auth, postCtrl.deletePost);
// router.get("/:id", auth, readCtrl.readPost)

module.exports = router;