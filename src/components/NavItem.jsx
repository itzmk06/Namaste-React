import Login from "./Login";
import {Link} from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStattus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";


const NavItem = () => {
  const status=useOnlineStatus();
  const data=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items)
  // console.log(data);
  // console.log(cartItems);
  return (
    <div>
      <ul className="nav-item text-lg m-10 flex justify-start flex-row items-center gap-6">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About us</Link></li>
        <li><Link to={"/cart"}>Cart ({cartItems.length})</Link></li>
        {/* <li><Link to={"/cart"}>{data.name}</Link></li> */}
        <li><Link to={"/online"}>{status?"💚":"❤"}</Link></li>
        <Login/>
      </ul>
    </div>
  );
};
export default NavItem;