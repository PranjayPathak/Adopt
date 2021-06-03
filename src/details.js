import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel";
import ErrorBoundary from "./errorBoundary";
import ThemeContext from "./themeContext";

class Details extends Component {
  // constructor() {
  //   super();
  //   this.state = { loading: true };
  // }
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id || 1}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0])); //whole object in state
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ..</h2>;
    }
    // throw new Error("awdawdw");
    const { animal, breed, city, state, description, name, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city},${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

//withRouter: to access data provided in the route via the props eg."this.props.match.params.id"
const DetailsWithRouter = withRouter(Details);
export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}

// export default withRouter(Details);
