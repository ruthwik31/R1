const parent = React.createElement("div", { id: "parentttt" }, [
  React.createElement("div", { id: "cc1", key: "div1" }, [
    React.createElement("h1", { key: "h1-1" }, "hai h231"),
    React.createElement("h2", { key: "h2-1" }, "hai h2"),
  ]),
  React.createElement("div", { id: "cc2", key: "div2" }, [
    React.createElement("h1", { key: "h1-2" }, "hai im h1"),
    React.createElement("h2", { key: "h2-2" }, "hai im h2"),
  ]),
]);

console.log("I'm here");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
