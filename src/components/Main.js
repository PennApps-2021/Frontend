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
    this.startForm = this.startForm.bind(this);

    this.state = {
      state: 0,
      interests: [],
      courseData: []
    };
  }

  changePage(newState) {
    this.state["state"] = newState;
    this.setState(this.state);
  }


  startForm() {
    this.changePage(3);

    httpRequest("formData", "POST", {
    }, d => {

      console.log(d);

      let interests = [];

      for(let i = 0; i < d.length; i++) {
        interests.push({value: d[i], label: d[i]})
      }

      this.state["interests"] = interests;

      this.state["state"] = 1;
      this.setState(this.state);
    })

  }

  getCourses(gpa, interests, majors) {

    let errorMessage = ""

    if(interests.length == 0 || majors.length == 0 || gpa == "") {
      errorMessage = "Please enter an interest, major, and Desired GPA!"
    } else if (isNaN(gpa)) {
      errorMessage = "Please enter a number for your GPA";
    } else if (parseFloat(gpa) <= 0 || parseFloat(gpa) > 4) {
      errorMessage = "Please enter a valid GPA";
    }

    if (errorMessage != "") {
      alert(errorMessage);
      return;
    }

    this.changePage(3);

    let interestArr = []

    for(let i = 0; i < interests.length; i++) {
      interestArr.push(interests[i].value);
    }

    let majorStr = ""

    for(let i = 0; i < majors.length; i++) {
      majorStr += majors[i].value + ","
    }

    majorStr = majorStr.substring(0, majorStr.length-1);

    httpRequest("", "POST", {
      interest: interestArr,
      major: majorStr,
      desiredGPA: gpa
    }, d => {
      console.log(d);
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
                return <Landing nextPage = {this.startForm}></Landing>
            case 1:
                return <Form interests = {this.state.interests} getCourses = {this.getCourses} lastPage = {() => this.changePage(0)} nextPage = {() => this.changePage(2)}/>;
            case 2:
                return <Matching courseData = {this.state.courseData} lastPage = {() => this.changePage(1)}></Matching>
            case 3:
              return (
                <div>
                  <ReactLoading className = "loading" type={"spinningBubbles"} color={"#F27F7D"} height='300px' width='300px'/>
                </div>
              )
            default:
                return <p>Error, please try again</p>
        }
  }
}

export default Main;
