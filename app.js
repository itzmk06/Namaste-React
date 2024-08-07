{/* <div id="parent">
  <div id="child">
    <h1 id="h1tag"></h1>
    <h2 id="h2tag"></h2>
  </div>
</div> */}

const item=React.createElement('div',{id:"parent"},
  React.createElement('div',{id:"child"},
    [
      React.createElement('h1',{id:'h1tag'},"I am h1"),
      React.createElement('h2',{id:'h2tag'},"I am h2")
    ]
  )
);

const root=ReactDOM.createRoot(document.querySelector('#root'));

root.render(item);