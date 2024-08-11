import React from "react";
import ReactDom from "react-dom/client"
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";

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
                    element:<About/>
                },
                {
                    path:"/help",
                    element:<Help/>
                },
                {
                    path:"/restaurant/:id",
                    element:<ResMenu/>
                }

            ],
            errorElement:<Error/>
        }
    ]
);


const root=ReactDom.createRoot(document.querySelector("#main"));
root.render(<RouterProvider router={appRouter}/>);