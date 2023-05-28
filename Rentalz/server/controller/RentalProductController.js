
import {RentalProduct} from "../models/RentalProductModel.js";

const getRentalProducts = async (req, res) => {

  try{
    const rentalProducts = await RentalProduct.find({})
    res.json(rentalProducts);  
  }catch (error){

    console.log(error);

    res.status(404);
    res.json({
        message: error
    })
  }
}

const getRentalProductById = async (req, res) => {

  const productId = req.params.productId;
  console.log(`Product ID is ${productId}`);

  try{
    const rentalProduct = await RentalProduct.findById(productId);
    res.json(rentalProduct);
  }catch (error){
    console.log(error);

    res.status(404);
    res.json(
      {
        message: `Unable to retrive the product details - ${productId}`
      }
    )
  }

}

export {getRentalProducts, getRentalProductById};