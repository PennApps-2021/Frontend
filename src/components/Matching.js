import React from 'react';
import Button from '@material-ui/core/Button';
import CourseCard from './CourseCard';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import '../index.css'


class Matching extends React.Component{
    constructor(props) {
        super(props)


        this.lastCard = this.lastCard.bind(this);
        this.nextCard = this.nextCard.bind(this);

        this.state={
            state: 0,
            courseData: this.props.courseData,
            // [
            //     {A: 100, B: 50, C: 10, D: 23, F: 2, number: "140", degreeAttributes: "Natural Sciences", description: "Surveys the history of European and American art music in an international context; examines major artistic styles, representative composers and works, and their relationship to pertinent non-western musical traditions and philosophies; reviews fundamental music concepts; strengthens aural analytical skills; familiarizes students with the music library, and research and writing techniques. Prerequisite: First year standing in music or consent of instructor.", averageGPA: "4.0", credits: "3", name: "History of Germany", subject: "HIST", teachers: "Professor Ashay"},
            // ],
            currentCourseIndex: 0
        }


    }

    lastCard() {
        let currentCourseIndex = this.state.currentCourseIndex;
        if (currentCourseIndex > 0) {
            this.state["currentCourseIndex"] = currentCourseIndex - 1;
            this.setState(this.state);
        }
    }

    nextCard() {
        let currentCourseIndex = this.state.currentCourseIndex;
        let totalCourses = this.state.courseData.length;
        if (currentCourseIndex < totalCourses - 1) {
            this.state["currentCourseIndex"] = currentCourseIndex + 1;
            this.setState(this.state);
        }
    }

    changePage(newState) {

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }
    

    render() {

        let currentCourseIndex = this.state.currentCourseIndex;

        if (currentCourseIndex < 0 || currentCourseIndex >= this.state.courseData.length) {
            return <p>No courses found :</p>
        }

        let currentCourseData = this.state.courseData[currentCourseIndex];


        let card = <CourseCard nextCard = {this.nextCard} lastCard = {this.lastCard} courseData = {currentCourseData}></CourseCard>;

        let totalCourses = this.state.courseData.length;

        let regularIconStyle = {
            fontSize: "50px",
        }

        let disabledIconStyle = {
            fontSize: "50px",
            color: "grey"
        }

        let courseArrowDiv = {
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }


        return (
            <div className = 'bodyDivTransparent'>
                {card}
                <div style = {courseArrowDiv}>
                    {currentCourseIndex != 0
                    ?
                    <ArrowBackRoundedIcon onClick = {this.lastCard} style = {regularIconStyle} />
                    :
                    <ArrowBackRoundedIcon style = {disabledIconStyle} />

                    }

                    <p>{(currentCourseIndex+1) + '/' + totalCourses}</p>

                    {currentCourseIndex != totalCourses - 1
                    ?
                        <ArrowForwardRoundedIcon onClick = {this.nextCard} style = {regularIconStyle}  />
                    :
                        <ArrowForwardRoundedIcon style = {disabledIconStyle}  />
                    }
                </div>
                <br/>
                <br/>
                <br/>
                <button className = "searchBtn" onClick = {this.props.lastPage}>
                    Search Again
                </button>
            </div>

        )

    }
}

export default (Matching);
