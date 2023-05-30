const User = require("../../models/user.model");
const decodeToken = require("../../utils/decodeToken ");

let logoutFunction = async (req, res) => {
  let { authorization } = req.headers;
  let decode = decodeToken(authorization);

  try {
    let out = await User.updateOne({ _id: decode._id }, { token: null });
    res.status(200).send({ message: "user logout successfull" });
  } catch (error) {
    res.status(400).send({ message: "Something went wrong" });
  }
};

module.exports = logoutFunction;
