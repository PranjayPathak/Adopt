
const App = () => {
    return( React.createElement(
        "div",
        {}, 
        [
            React.createElement("h1",{},"Adopt me"),
            React.createElement(Pet,{name:"Buzey" , animal:"Dog", Breed:"Indian Pariah" }),
            React.createElement(Pet,{name:"Buzey" , animal:"Dog", Breed:"Indian Pariah" }),
            React.createElement(Pet,{name:"Buzey" , animal:"Dog", Breed:"Indian Pariah" })
        ]
    ));
};

const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h2",{},props.name),
        React.createElement("h3",{},props.animal),
        React.createElement("h3",{},props.brees)],
        
    )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
