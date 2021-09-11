import React from "react";
import Form from "./Form";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);

    this.state = {
      state: 1,
    };
  }

  changePage(newState) {
    this.state["state"] = newState;
    this.setState(this.state);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    switch (this.state.state) {
      case 0:
        return <p>Landing page</p>;

      case 1:
        return <Form />;
      case 2:
        return <p>Flash cards page</p>;

      default:
        return <p>Error, please try again</p>;
    }
  }
}

export default Main;
