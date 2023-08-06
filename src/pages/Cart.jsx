import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {useState, useEffect} from "react";
import axios from "axios";
import Razorpay from  "razorpay";
const Cart = () => {

  const checkoutHandler = async () => {
    const { data: { key }} = await axios.get("http://localhost:4000/api/getkey")

    const { data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
      totalAmount
    })
    console.log(order);

  const options = {
    key,
    amount: order.totalAmount,
    currency: "INR",
    name: "rpstylish",
    description: "project error has been fuckes me",
    image: "https://avatars.githubusercontent.com/u/25058652?v=4",
    order_id: order.id,
    callback_url: "http://localhost:4000/api/paymentVerification",
    prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#121212"
    }
};
const razor = new window.Razorpay(options);
razor.open();
}




  
  const {cart} = useSelector( (state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart]) 

  return( <div className=" flex justify-center items-center w-full h-fit bg-white">
            {
                cart.length > 0 ? 
                (<div className="flex justify-center items-start gap-x-28 mt-36 mb-16 w-[100%]">

                  <div className="h-fit flex flex-col gap-20 w-[33%]">
                    {
                        cart.map( (item, index) => {
                          return <CartItem key={item.id} item={item} itemIndex={index}/>
                        })
                    }
                  </div>

                  <div className="flex flex-col items-start justify-between h-[480px] mt-20 ">
                    <div>
                      <div className=" text-green-700 text-[14px] font-semibold">Your Cart</div>
                      <div className="font-semibold text-[25px] uppercase text-green-700 mb-3">Summary
                      </div>
                      <p  className="text-[13px] text-green-700 font-semibold">
                         <span className="">Total items: {cart.length}</span>
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-y-4">
                      <p className="text-[12px] text-green-700">Total Amount:
                        <span className="font-semibold ml-1 text-green-700">Rs {totalAmount} </span>
                      </p>
                      <button className="bg-green-700 text-white px-20 py-2 rounded-md" onClick={checkoutHandler}>Checkout now</button>
                    </div>
                  </div>
                  
                </div>) : 

                (<div  className="flex flex-col justify-center items-center w-screen h-screen gap-6
                 text-slate-900">
                  <p className="text-2xl">Your cart is empty</p>
                  <Link to={"/"}>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-md">Shop Now</button>
                  </Link>
                </div>)
            }


  </div>)
};

export default Cart;
