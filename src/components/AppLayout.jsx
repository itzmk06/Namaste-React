import Header from "./Header";
import { Outlet } from "react-router-dom";
import Offline from "./Offline";
import { useOnlineStatus } from "../utils/useOnlineStattus";
import { useEffect } from "react";

const AppLayout = () => {
  const status=useOnlineStatus();
  useEffect(()=>{
    document.body.style.overflow=status?"visible":"hidden";
    return()=>{
      document.body.style.overflow="visible";
    }

  },[status]);
  return status?    <>
  <Header />
  <Outlet />
</>:(<>
  <Header/>
  <Offline/>
  </>)

};

export default AppLayout;
