import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./pet.js";
import SearchParams from "./searchParams";
import Details from "./details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>

          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>

        {/* <Pet name="Buzey" animal="Dog" breed="Indian Pariah"></Pet>
      <Pet name="Buzey" animal="Dog" breed="Indian Pariah"></Pet>
      <Pet name="Buzey" animal="Dog" breed="Indian Pariah"></Pet> */}
      </Router>
    </div>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
