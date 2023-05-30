require("dotenv").config();
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;

let decodeToken = (authorization) => {
  authorization = authorization.split(" ");
  let token = authorization[1];
  let decode = jwt.decode(token, token_secret);

  return decode;
};

module.exports = decodeToken;
