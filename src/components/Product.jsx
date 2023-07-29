import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/cartSlice"
import {toast} from "react-hot-toast";

const Product = ({post}) => {

  // Hume cart ki zarurat padegi remove item or addto cart button ke liye so we need to use cart here in followingmanner
  const {cart} = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (<div className=" bg-white flex flex-col justify-between items-center  gap-x-10 
  hover:scale-110 transition duration-300 ease-in hover:shadow-2xl shadow-black hover:cursor-pointer gap-3 p-4 mt-10 ml-5 rounded-xl">
    <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
      {post.title}
    </div>
    <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
    </div>
    <div className="h-[180px]">
      <img className="w-full h-full" src={post.image} alt="product"/>
    </div>
    <div className="flex justify-between gap-12 items-center w-full mt-5">
      <p  className="text-green-600 font-semibold">${post.price}</p>
    </div>

      {
        cart.some((p) => p.id == post.id) ? 
        <button  className="text-slate-100 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-white
          hover:text-gray-700 transition duration-300 ease-in bg-gray-700"onClick={removeFromCart}>
          Remove Item
        </button> : 
        <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={addToCart}>
          Add to Cart
        </button>
      }
    
  </div>)
};

export default Product;
