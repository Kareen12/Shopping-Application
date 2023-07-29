import Navbar from "./components/Navbar";
// import CartItem from "./components/CartItem";
// import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (<div className=" bg-slate-100">
    <div className="bg-slate-900">
      <Navbar/>
      {/* <CartItem/>
      <Product/> */}
    </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
  </div>)
};

export default App;
