import Login from "./Login";
const NavItem = () => {
  return (
    <div>
      <ul className="nav-item">
        <li>Home</li>
        <li>About us</li>
        <li>Cart</li>
        <li>Help</li>
        <li>Sign in</li>
        <Login/>
      </ul>
    </div>
  );
};
export default NavItem;