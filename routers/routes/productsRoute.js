const express = require("express");

const productsRoute = express.Router();

const { products, addProducts, removeProducts, updateProducts } = require("../controllers/products");

const {authentication} = require("../middlewares/authentication");


productsRoute.get("/products", products);

{/* Add authentication when admin want to add new products*/}
productsRoute.post("/products", authentication, addProducts);



{/* Authentication is used when admin want to remove products*/}
productsRoute.delete("/products/:id", authentication, removeProducts);
 


{/* Authentication is used when admin want to update products*/}
productsRoute.put("/products", authentication, updateProducts);

 

module.exports = productsRoute;
