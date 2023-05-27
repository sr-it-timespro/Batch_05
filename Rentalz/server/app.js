


import rental_products from "./rental-products.js"
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Root endpoint accessed - v2..")
})

app.get("/test", (req, res) => {
  res.json("Test endpoint accessed")
})

app.get("/api/rentalproducts", (req, res) => {
  // return rental_products;
  res.json(rental_products);
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started and running in port ${PORT}`);
})