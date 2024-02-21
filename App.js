

const parent = React.createElement("div",{id:"Parent"},[
    React.createElement("div",{id:"Child1"},[
        React.createElement("h1",{id:"Heading1"},"Hi Its Child 1 H1"),
        React.createElement("h2",{id:"Heading2"},"Hi Its Child 1 H2")
     ]),
     React.createElement("div",{id:"Child2"},[
        React.createElement("h1",{id:"Heading1"},"Hi Its Child 2 H1"),
        React.createElement("h2",{id:"Heading2"},"Hi Its Child 2 H2")
     ])
]);

const header = React.createElement("h1",{id:"Heading"},"Hello React Lets learn !");

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
