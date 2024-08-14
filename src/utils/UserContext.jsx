import { createContext } from "react";

const UserContext=createContext(
    {
        name:"Default User"
    }
);

export default UserContext;
