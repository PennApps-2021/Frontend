import React from "react";
import Form from "./Form";
import Landing from "./Landing";
import Matching from "./Matching";
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);

    this.state = {
      state: 0,
    };
  }

  changePage(newState) {
    this.state["state"] = newState;
    this.setState(this.state);
  }

  componentDidMount() {}

  componentWillUnmount() {}


    render() {
        switch(this.state.state) {
            case 0:
                return <Landing nextPage = {() => this.changePage(1)}></Landing>
            case 1:
                return <Form lastPage = {() => this.changePage(0)} nextPage = {() => this.changePage(2)}/>;
            case 2:
                return <Matching lastPage = {() => this.changePage(1)}></Matching>
            default:
                return <p>Error, please try again</p>
        }
  }
}

export default Main;
