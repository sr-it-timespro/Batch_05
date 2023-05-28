
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import { Main } from "./components/Main";
import {Routes, Route} from "react-router-dom"
import {Home} from "./components/Home";
import {ProductDetails} from "./components/ProductDetails";

function App() {
  return (

    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/products/:productId' element={<ProductDetails></ProductDetails>}></Route>

    </Routes>
  );
}

export default App;
