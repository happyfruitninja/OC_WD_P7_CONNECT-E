const jwt = require("jsonwebtoken");

//this middleware will check incoming request for a token, validate, decode and check that the encoded userId mathes any userId within the body of the request.
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userInfo;
    req.auth = { userId };
    if (req.body.userInfo && req.body.userId !== userId) {
      throw "Invalid user info";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request"),
    });
  }
};
