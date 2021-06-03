import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./carousel";
import ErrorBoundary from "./errorBoundary";
import ThemeContext from "./themeContext";
import Modal from "./modal";

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

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>Loading ..</h2>;
    }
    // throw new Error("awdawdw");
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city},${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I'm a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
