const mongoose = require("mongoose");


const cartModel = new mongoose.Schema({

  title: { type: String },
  price: { type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },

});


module.exports = mongoose.model("cartModel", cartModel);