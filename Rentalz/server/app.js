
// import rental_products from "./SampleData/SampleRentalProducts.js"
import express from "express";
import dotenv from "dotenv";
import {connectToDB} from "./utils/DBUtils.js"

import {rentalProductRouter} from "./router/RentalProductRouter.js"
import {userRouter} from "./router/UserRouter.js"

dotenv.config();

const app = express();

app.use(express.json());

connectToDB();

app.use(rentalProductRouter)
app.use(userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started and running in port ${PORT}`);
})