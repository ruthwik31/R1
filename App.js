import React from "react";
import ReactDOM from "react-dom/client";

//const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
//console.log(heading);

//jsx is a react element
 /*
const jsxHeading = (
  <h1 className="heading" tabIndex="1">
    Bro i don't care
  </h1>
);*/
//console.log(jsxHeading);

//compnents should strt with capital letter

//const Title = () => {
//  return <h1>BOSS:Hello😁</h1>;
//};
const elem=<span>React Elem</span>


const Title = function(){
  return (
    <div>
      <h1>{elem}</h1>
      <h1>BOSS:Hello💕</h1>
    </div>
  );
  
};
const num=100;
//componentcomposition <Title></Title> or <Title/> or {Title()}
//anything inside {} is treated as a JavaScript expression.
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h2>{num + 43}</h2>
    <h2>{console.log("GADDAM RUTHWIK")}</h2>
    <h1 className="heading">MAL:Bossss!😒</h1>
  </div>
);

//jsxHeading is transpiled into js (Ecma Script-ES6) by parcel before it reachss the JS Engine.
//Parcel-responsibility of transpiling-Babel-JS compiler

//root.render(jsxHeading);

//We cannot render the component using root.render(HeadingComponent)
//But using angular braces we can.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
 