import { LOGO } from "../utils/constants";
const Logo = () => {
  return (
    <div className="logo m-3 flex justify-center items-center">
      <img
        className="logo w-16"
        src={LOGO}
      ></img>
      <h1 className="logo-head text-[2.3rem] ml-2">Zesty </h1>
    </div>
  );
};
export default Logo;
