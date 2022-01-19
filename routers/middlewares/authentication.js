const jwt = require("jsonwebtoken");



// Check if the JWT token is correct.
const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const valid = jwt.verify(token, "ABC");
    req.token = valid;
    console.log(valid);
    next();
  } catch (error) {
    res.status(403);
    res.send(error);
  }
};

module.exports = { authentication };
