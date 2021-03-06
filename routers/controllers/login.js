const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/userModel");



// Method used to sign in. Check if use exist in the database.
const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const see = await bcrypt.compare(password, user.password);
      if (see === true) {
        const payload = { userId: user._id, userName: user.name };
        const token = jwt.sign(payload, "ABC");
        res.status(200).json({ token, user });
        // res.status(200).json(`Hello admain! ${user.name}`);
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };
