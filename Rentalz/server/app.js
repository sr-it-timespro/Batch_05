
// import rental_products from "./SampleData/SampleRentalProducts.js"
import express from "express";
import dotenv from "dotenv";
import {connectToDB} from "./utils/DBUtils.js"

import {rentalProductRouter} from "./router/RentalProductRouter.js"

dotenv.config();

const app = express();

connectToDB();

app.use(rentalProductRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started and running in port ${PORT}`);
})