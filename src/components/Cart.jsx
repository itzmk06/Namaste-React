import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    const items=useSelector((store)=>store.cart.items);
    const handleClear=()=>{
        dispatch(clearCart());
    }
    return (
        <div className=" text-center w-8/12 m-auto my-5">
            <h1 className="text-2xl  font-semibold ">Cart</h1>
            <button onClick={()=>handleClear()} className="rounded-lg text-md px-2 py-1 bg-zinc-700 text-zinc-200">Clear Cart</button>
            {
                items.map((food,index)=>{
                    return(
                       <ItemList key={index} food={food}/>
                    )
                })
            }
        </div>
    );
};
export default Cart;