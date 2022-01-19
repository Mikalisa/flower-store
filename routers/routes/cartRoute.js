const express = require('express');

const cartRoute = express.Router();

const {addCart} = require("../controllers/cart");

const {authentication} = require("../middlewares/authentication");




cartRoute.post('/cart', authentication, addCart);



module.exports = cartRoute;