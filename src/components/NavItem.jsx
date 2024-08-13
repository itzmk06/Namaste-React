import Login from "./Login";
import {Link} from "react-router-dom"
import { useOnlineStatus } from "../utils/useOnlineStattus";

const NavItem = () => {
  const status=useOnlineStatus();
  return (
    <div>
      <ul className="nav-item text-lg m-10 flex justify-start flex-row items-center gap-6">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About us</Link></li>
        <li><Link to={"/cart"}>Cart</Link></li>
        <li><Link to={"/online"}>{status?"💚":"❤"}</Link></li>
        <Login/>
      </ul>
    </div>
  );
};
export default NavItem;