const bcrypt = require("bcrypt");
const userModel  = require("../../db/models/userModel")



// Add new use to the MongoDB model.
const addUser = async(req, res) => {

  let { name, email, password, userLevel } = req.body;

  try {


      {/* Encrypt the password using bcrypt */}
      
      password = await bcrypt.hash(password, 10);
      console.log(password);
      const newUser = new userModel({ name, email, password, userLevel });
      const response = await newUser.save();
      res.status(201).json(response);


  } catch (error) {
      res.send(error);
  }

};

module.exports = { addUser };
