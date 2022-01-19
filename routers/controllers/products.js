const productsModel = require("../../db/models/productsModel");


// Add new products
const addProducts = async (req, res) => {


  const { title, price, imgLink, occasionType} = req.body;


//key from what i sent in body
  const newProducts = new productsModel({title:title, price:price, imgLink:imgLink, occasionType:occasionType});

  console.log(newProducts);

  try {
      const savedProduct= await newProducts.save()
      res.status(200).json(savedProduct)

  }catch (error){

      res.send(error);

  }

}


const removeProducts = async (req, res) => {

  const id = req.params.id;


  console.log(id);


  try{


    const deleteProduct = await productsModel.deleteOne({_id: id});

    console.log(deleteProduct);


    res.status(200).json(deleteProduct);


  }catch (error) {

    res.send(error);

  }




}

// Update the product information 
const updateProducts = async (req, res) => {


   const {id, title, price, imgLink, occasionType} = req.body;

   const product = new productsModel({

    _id: id,
    title: title,
    price: price,
    imgLink: imgLink,
    occasionType: occasionType

  }

    );



  try

  {

    const _id = id;

    console.log(product);

    const updateProduct = await productsModel.updateOne({_id: _id}, product);

    console.log(updateProduct);


    res.status(200).json(updateProduct);


  } catch (error) {

    res.send(error);

  }


}




// Get all products.
const products = async (req,res)=>{

    try {
//to store pro and use
        const products = await productsModel.find({});
        res.status(200).json(products);

    } catch (error){

        res.send(error);

    }
}


module.exports = {products, addProducts, removeProducts, updateProducts};
