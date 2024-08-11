import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (
        <div className="error-page">
            <h1>Something went wrong!</h1>
            <h3>{err.status} : {err.statusText}</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/3855/3855833.png"/>
        </div>
    );
};
export default Error;