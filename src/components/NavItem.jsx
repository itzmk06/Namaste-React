import Login from "./Login";
import {Link} from "react-router-dom"

const NavItem = () => {
  return (
    <div>
      <ul className="nav-item">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About us</Link></li>
        <li><Link to={"/help"}>Help</Link></li>
        <li><Link to={"/cart"}>Cart</Link></li>
        <li><Link to={"/signup"}>SignUp</Link></li>
        <Login/>
      </ul>
    </div>
  );
};
export default NavItem;