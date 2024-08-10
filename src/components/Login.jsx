import { useState } from "react";
const Login=()=>{
    const [login,setLogin]=useState("Login");
    return <div className="login">
        <button className="login-btn" 
        onClick={()=>login==="Login"?setLogin("Logout"):setLogin("Login")}
        >{login}</button>
    </div>
}
export default Login;