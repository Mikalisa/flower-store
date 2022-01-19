const cartModel = require("../../db/models/cartModel");


const addCart = async (req, res) => {


    const { cartItem } = req.body;
  
  
    try {

        const savedCart = await newCart.insertMany(cartItem);

        res.status(200).json(savedCart);
  
    }catch (error){
  
        res.send(error);
  
    }
  
  }


  module.exports = {addCart};