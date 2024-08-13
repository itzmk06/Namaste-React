import Logo from "./Logo";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <div className="header flex h-16 justify-between items-center bg-zinc-300 text-zinc-800">
      <Logo />
      <NavItem />
    </div>
  );
};
export default Header;
