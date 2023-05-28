
import express from "express";

import {
  getRentalProducts,
  getRentalProductById
} from "../controller/RentalProductController.js"

const rentalProductRouter = express.Router();

rentalProductRouter.get("/api/rentalproducts", getRentalProducts);
rentalProductRouter.get("/api/rentalproducts/:productId", getRentalProductById);

export {rentalProductRouter};