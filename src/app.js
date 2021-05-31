import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./pet.js";
import SearchParams from "./searchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me"),
//     React.createElement(Pet, {
//       name: "Buzey",
//       animal: "Dog",
//       breed: "Indian Pariah",
//     }),
//     React.createElement(Pet, {
//       name: "Buzey",
//       animal: "Dog",
//       breed: "Indian Pariah",
//     }),
//     React.createElement(Pet, {
//       name: "Buzey",
//       animal: "Dog",
//       breed: "Indian Pariah",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
      {/* <Pet name="Buzey" animal="Dog" breed="Indian Pariah"></Pet>
      <Pet name="Buzey" animal="Dog" breed="Indian Pariah"></Pet>
      <Pet name="Buzey" animal="Dog" breed="Indian Pariah"></Pet> */}
    </div>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
