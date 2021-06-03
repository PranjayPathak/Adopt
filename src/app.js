import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Pet from "./pet.js";
import SearchParams from "./searchParams";
import Details from "./details";
import ThemeContext from "./themeContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

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
