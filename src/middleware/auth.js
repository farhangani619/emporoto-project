const jwt = require("jsonwebtoken");
const User = require("../models/user");

//checking if user is authenticated or not by verifying the token sent from req.body
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); //
    const decoded = jwt.verify(token, "thisisanauthsign"); // verifying the jwt
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(404).send("please authenticate");
  }
};
module.exports = auth;
