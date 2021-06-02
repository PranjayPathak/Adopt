import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(`caught an error: ${error}: ${info}`);
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  //   componentDidUpdate() {
  //     if (this.state.hasError) {
  //       setTimeout(() => {
  //         this.setState({ redirect: true });
  //       }, 5000);
  //     }
  //   }
  render() {
    if (this.state.redirect == true) {
      return <Redirect to="/"></Redirect>;
    } else if (this.state.hasError) {
      console.log("hereee..");
      return (
        <h2>
          This listing has error.<Link to="/">Click here</Link> to go back to
          the home page, will redirecct in 5 seconds
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
