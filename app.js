import React from "react";
import ReactDOM from "react-dom/client";
{/* <div id="parent">
  <div id="child">
    <h1 id="h1tag"></h1>
    <h2 id="h2tag"></h2>
  </div>
</div> */}

const item=React.createElement('div',{id:"parent"},
  React.createElement('div',{id:"child"},
    [
      React.createElement('h1',{id:'h1tag'},"Manoj is Best!"),
      React.createElement('h2',{id:'h2tag'},"Number one or only one ")
    ]
  )
);

const root=ReactDOM.createRoot(document.querySelector('#root'));

root.render(item);