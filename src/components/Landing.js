import React from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LongCloud from "../assets/LongCloud.png";
import MediumCloud from "../assets/MediumCloud.png";
import LaptopOnCloud from "../assets/LaptopOnCloud.png";
import styles from "../assets/landing.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 0,
    };
  }

  changePage(newState) {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="bodyDiv">
        <div className="header">
          BeMyGenEd
          <FavoriteIcon />
        </div>

        <p>Match you with your favorite course!</p>

        <button
          className = "searchBtn"
          onClick={this.props.nextPage}
          style = {{width: "200px"}}
        >
          Get Started
        </button>
        <img alt="Long Cloud 1" src={LongCloud} className="longCloud" />
        <img alt="Medium Cloud 1" src={MediumCloud} className="mediumCloud" />
        <img
          alt="Laptop on Cloud"
          src={LaptopOnCloud}
          className="laptopOnCloud"
        />
      </div>
    );
  }
}

export default Landing;
