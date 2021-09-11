import React from "react";
import Form from "./Form";
import Landing from "./Landing";
import Matching from "./Matching";
import {httpRequest} from '../Request'
import ReactLoading from 'react-loading'; 
import '../index.css'
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
    this.getCourses = this.getCourses.bind(this);

    this.state = {
      state: 0,
      courseData: []
    };
  }

  changePage(newState) {
    this.state["state"] = newState;
    this.setState(this.state);
  }

  getCourses(gpa, interests, majors) {

    this.changePage(3);

    let interestStr = ""

    for(let i = 0; i < interests.length; i++) {
      interestStr += interests[i].value + ","
    }

    interestStr = interestStr.substring(0, interestStr.length-1);

    let majorStr = ""

    for(let i = 0; i < majors.length; i++) {
      majorStr += majors[i].value + ","
    }

    majorStr = majorStr.substring(0, majorStr.length-1);

    httpRequest("", "POST", {
      interest: interestStr,
      major: majorStr,
      desiredGPA: gpa
    }, d => {
      this.state["courseData"] = d;
      this.state["state"] = 2;
      this.setState(this.state);
    })

  }

  componentDidMount() {}

  componentWillUnmount() {}


    render() {
        switch(this.state.state) {
            case 0:
                return <Landing nextPage = {() => this.changePage(1)}></Landing>
            case 1:
                return <Form getCourses = {this.getCourses} lastPage = {() => this.changePage(0)} nextPage = {() => this.changePage(2)}/>;
            case 2:
                return <Matching courseData = {this.state.courseData} lastPage = {() => this.changePage(1)}></Matching>
            case 3:
              return (
                <div>
                  <ReactLoading className = "loading" type={"spin"} color={"black"} height='300px' width='300px'/>
                </div>
              )
            default:
                return <p>Error, please try again</p>
        }
  }
}

export default Main;
