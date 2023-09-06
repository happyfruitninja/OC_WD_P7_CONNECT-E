const { Post } = require("../models");
const fs = require("fs"); //file system

//creating a post
exports.createPost = (req, res, next) => {
  let requestedPost;
  let mediaUrl = null;
  if (req.file) {
    mediaUrl =
      req.protocol + "://" + req.get("host") + "/media/" + req.file.filename;
    requestedPost = JSON.parse(req.body.post);
  } else {
    requestedPost = req.body;
  }
  const post = new Post({
    post: requestedPost.post,
    mediaUrl,
    userId: requestedPost.userId,
  });
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//getting all posts
exports.getAllPosts = (req, res, next) => {
  Post.findAll({ order: [["createdAt", "DESC"]] })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

//get one post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({ error });
    });
};
//marking post as read

//TODO add method to mark a post
//step 1. look for a post using req.params.id(see getOnePost)
//step 2. check to see if post.usersRead array already has body.userId
//step 3. if not add it and do sequelize update and sequelize save