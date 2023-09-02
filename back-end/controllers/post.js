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
  Post.findAll()
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

//FIXME delete post + remove in route
exports.deletePost = (req, res, next) => {
  Post.findOne({ where: { postId: req.params.id } })
    .then((post) => {
      if (post) {
        Post.deleteOne({ postId: post.id })
          .then(() => {
            res.status(200).json({ message: "Deleted" });
          })
          .catch((error) => {
            res.status(400).json({ error: error.message || error });
          });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message || error });
    });
};
