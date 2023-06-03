
import { useEffect, useState } from "react"
import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { Container, Row, Col } from "react-bootstrap";
import { Product } from "./Product"
import { ProductsList } from "./ProductsList";

const ProductsListPage = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchRentalProducts = async () => {
      const response = await axios.get("/api/rentalproducts");
      const products = response.data;

      console.log(products);

      setProducts(products);
    }
    fetchRentalProducts();

  }, [])

  return (
    <>

      <Header></Header>

      <div style={{ "minHeight": "85vh" }}>

        <ProductsList products={products}></ProductsList>

      </div>


      <Footer></Footer>
    </>
  )

}

export { ProductsListPage }