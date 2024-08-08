import React from "react";
import ReactDOM from "react-dom/client";

const jsxHead=(
<h1 
id="heading">
  Ketaki is Best!
  </h1>
);

const root=ReactDOM.createRoot(document.querySelector('#root'));
// root.render(jsxHead);

const HeadElement=()=><h1>Hello</h1>;

// this is component composition
const HeadElement1=()=>{
  return <div id ="container">
    <HeadElement/>
      <h1 id="heading">Hello world!</h1>
      <h2 className="heading">Hello Manoj!</h2>
  </div>
};

// root.render(<HeadElement1/>);

//another example

// this is react element 
const desc=(
   <>
  <h1>This is react element</h1>
  <h2>Yes this is react element</h2>
  </>
);


const number=100;
const Title=()=>{
  return <>
  {desc}
    <h1>CrafNeuron</h1>
    <h2>Powered by Manoj</h2>
  </>
};
const Main=()=>{
  return <>

    <h1>{number+100*100}</h1>
    <Title/>
    <h2>Protected by Happiness!</h2>
  </>
};
const anotherRoot=ReactDOM.createRoot(document.querySelector('#container'));
anotherRoot.render(<Main/>);














