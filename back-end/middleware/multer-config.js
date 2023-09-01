const multer = require("multer");
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "audio/mp3": "mp3",
  "video/mp4": "mp4",
};

//BUSINESS LOGIC - how multer figures out where to save and how
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "images");
    },
    filename: (req, file, callback) => {
      const name = file.originalname.split(" ").join("_");
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + "." + extension);
    },
  });
  
  module.exports = multer({ storage: storage }).single("image", "audio", "video");
  