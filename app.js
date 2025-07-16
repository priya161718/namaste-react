import React from "react";
import ReactDOM from "react-dom/client";




 
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React by jsx
    </h1>   
);

//Component Composition
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h2>{console.log("abcd")}</h2>
         <h1 className="heading">Namaste React by FunctionalComponent</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

