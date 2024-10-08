import React from "react";
import ReactDom from "react-dom/client"
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import { lazy,Suspense} from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
const About=lazy(()=>import("./components/About"));
const ResMenu=lazy(()=>import("./components/ResMenu"));
import Cart from "./components/Cart";

const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
                },
                {
                    path:"/restaurant/:id",
                    element:<Suspense fallback={<Shimmer/>}><ResMenu/></Suspense>
                },
                {
                    path:"/Cart",
                    element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>
                }
            ],
            errorElement:<Error/>
        }
    ]
);


const root=ReactDom.createRoot(document.querySelector("#main"));
root.render(<RouterProvider router={appRouter}/>);