import React from 'react';
import Button from '@material-ui/core/Button';
import CourseCard from './CourseCard';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';



class Matching extends React.Component{
    constructor(props) {
        super(props)


        this.lastCard = this.lastCard.bind(this);
        this.nextCard = this.nextCard.bind(this);

        this.state={
            state: 0,
            classData: [
                {front: "hi", back: "bye"},
                {front: "abc", back: "cba"},
                {front: "hi", back: "bye"},
                {front: "abc", back: "cba"},
                {front: "hi", back: "bye"},
                {front: "abc", back: "cba"},
                {front: "hi", back: "bye"},
                {front: "abc", back: "cba"}
            ],
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
        let totalCourses = this.state.classData.length;
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
        let currentCourse = this.state.classData[currentCourseIndex];
        let currentCourseName = currentCourse.front;
        let currentCourseDescription = currentCourse.back;


        let card = <CourseCard nextCard = {this.nextCard} lastCard = {this.lastCard} courseName = {currentCourseName} courseDescription = {currentCourseDescription}></CourseCard>;

        let totalCourses = this.state.classData.length;

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
                <Button variant="contained" color="primary" onClick = {this.props.lastPage}>
                    Search Again
                </Button>
            </div>

        )

    }
}

export default (Matching);
