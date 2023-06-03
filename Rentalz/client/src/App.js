
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { Main } from "./components/Main";
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home";
import {ProductDetailsPage} from "./components/ProductDetailsPage";
import {ProductsListPage} from "./components/ProductsListPage"
import {LoginPage} from "./components/LoginPage"

import {CartPage} from "./components/CartPage";

function App() {
  return (

    <Routes>

      <Route path='/' element={<ProductsListPage></ProductsListPage>}></Route>
      <Route path='/products/' element={<ProductsListPage></ProductsListPage>}></Route>
      <Route path='/products/:productId' element={<ProductDetailsPage></ProductDetailsPage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/cart' element={<CartPage></CartPage>}></Route>

    </Routes>
  );
}

export default App;
