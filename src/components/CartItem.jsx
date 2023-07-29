// import {FcDeleteDatabase} from "react-icons/fc"
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  }
  return (<div className="flex justify-center items-center bg-white">
    <div className="flex justify-center items-center gap-x-8 border-b-4 border-gray-300 bg-white">
      <div className="">
        <img className="w-[270px] mb-5" src={item.image}/>
      </div>
      <div className="flex flex-col justify-center items-start gap-y-3 mb-5">
        <h1  className="font-semibold">{item.title}</h1>
        <h1  className="text-[13px] text-gray-700">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
        <div className="flex justify-between items-center w-full">
          <p className="text-green-700 font-semibold">${item.price}</p>
          <div  className="bg-red-200 p-2 rounded-full hover:cursor-pointer text-red" 
          onClick={removeItemFromCart}><MdDelete color="red" size={15}/></div>
        </div>
      </div>
    </div>
  </div>)
};

export default CartItem;
