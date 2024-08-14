import Login from "./Login";
import {Link} from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStattus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";


const NavItem = () => {
  const status=useOnlineStatus();
  const data=useContext(UserContext);
  console.log(data);
  return (
    <div>
      <ul className="nav-item text-lg m-10 flex justify-start flex-row items-center gap-6">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About us</Link></li>
        <li><Link to={"/cart"}>Cart</Link></li>
        {/* <li><Link to={"/cart"}>{data.name}</Link></li> */}
        <li><Link to={"/online"}>{status?"💚":"❤"}</Link></li>
        <Login/>
      </ul>
    </div>
  );
};
export default NavItem;