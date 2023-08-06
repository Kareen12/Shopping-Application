import Navbar from "./components/Navbar";
// import CartItem from "./components/CartItem";
// import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PaymentSuccess from "./pages/PaymentSucces";
import "./App.css";


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
        <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
      </Routes>
  </div>)
};

export default App;
