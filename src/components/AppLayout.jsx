import Header from "./Header";
import { Outlet } from "react-router-dom";
import Offline from "./Offline";
import { useOnlineStatus } from "../utils/useOnlineStattus";
import { useState,useEffect,useContext} from "react";
import UserContext from "../utils/UserContext";

const AppLayout = () => {
  const status = useOnlineStatus();
  useEffect(() => {
    document.body.style.overflow = status ? "visible" : "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [status]);

  const [userName, setUserName] = useState("Temp User");
  useEffect(() => {
    const data = {
      name: "Manoj Bhai",
    };
    setUserName(data);
  }, []);
  return status ? (
    <UserContext.Provider value={userName}>
    <>
      <Header />
      <Outlet />
    </>
    </UserContext.Provider>
  ) : (
    <>
      <Header />
      <Offline />
    </>
  );
};

export default AppLayout;
