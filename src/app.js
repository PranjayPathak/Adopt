import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet.js";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Buzey",
      animal: "Dog",
      Breed: "Indian Pariah",
    }),
    React.createElement(Pet, {
      name: "Buzey",
      animal: "Dog",
      Breed: "Indian Pariah",
    }),
    React.createElement(Pet, {
      name: "Buzey",
      animal: "Dog",
      Breed: "Indian Pariah",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
