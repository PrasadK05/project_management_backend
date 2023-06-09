const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const decodeToken = require("../utils/decodeToken ");
const token_secret = process.env.TOKEN_KEY;

const verifyToken = async function (req, res, next) {
  let { authorization } = req.headers;
  let decode = decodeToken(authorization);
  authorization = authorization.split(" ");
  let token = authorization[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    let user = await User.findOne({ _id: decode._id });
    if (user.token !== token) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const verification = jwt.verify(token, token_secret);
    next();
  } catch (e) {
    return res.status(401).send({ message: "Unauthorized" });
  }
};

module.exports = verifyToken;
