import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
        id:"title",
        key:"h1"
    },
    "Namaste React"
);

const heading2 = React.createElement(
    "h2",
    {
        id:"title",
        key:"h2"
    },
    "heading 2"
);

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading, heading2]
);

console.log(heading);

//functional component
const Title = () =>(
    <h1 id="title" key="h3">
        Namaste React
    </h1>
);

//functional component is nothing but a normal function in js.
//here we are taking an example of arrow function.
const HeaderComponent = () => {
    return <h1>React Functional Component</h1>;
}

//writing multiple declarations but in single line
const HeaderComponent2 = () => {
    return <div><h1>React Functional Component</h1><h2>enjoy coding</h2></div>;
}

//writing multiple declarations but in separate line
const HeaderComponent3 = () => {
    return (
        <div>
            {Title()}
            <h1>React Functional Component</h1>
            <h2>enjoy coding</h2>
        </div>
    );
}

//normal function example
const HeaderComponent4 = function() {
    return (
        <div>
            <h1>React Functional Component</h1>
            <h2>enjoy coding</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering react component
//root.render(container);

//rendering functional component
root.render(<HeaderComponent3/>);
