import React from "react";
import ReactDom from "react-dom/client"
import App from "./components/App";

const root=ReactDom.createRoot(document.querySelector("#main"));
root.render(<App/>);
