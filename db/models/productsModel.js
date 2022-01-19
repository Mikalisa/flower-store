const mongoose = require("mongoose");

const productsModel = new mongoose.Schema({

  title: { type: String },
  price: { type: String},
  imgLink: { type: String },
  occasionType: { type: String },


});


module.exports = mongoose.model("productsModel", productsModel);