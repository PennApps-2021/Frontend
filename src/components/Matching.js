import React from 'react';
import Button from '@material-ui/core/Button';
import CourseCard from './CourseCard';

class Matching extends React.Component{
    constructor(props) {
        super(props)

        this.state={
            state: 0,
            classData: [
                {front: "hi", back: "bye"},
                {front: "abc", back: "cba"}
            ],
            currentCourseIndex: 0
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


        let card = <CourseCard courseName = {currentCourseName} cardDivBack = {currentCourseDescription}></CourseCard>;


        return (
            <div className = 'bodyDiv'>
                <h1>Cards</h1>
                {card}

            </div>
        )

    }
}

export default (Matching);
