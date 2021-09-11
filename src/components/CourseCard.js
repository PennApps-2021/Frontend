import {useEffect, useState, useRef} from 'react';

import styles from '../assets/cards.css';


function CourseCard(props) {

    let fullName = props.firstName + " " + props.lastName;

    //Sets the background of a div to the profile picture
    let fullStyle = {
        backgroundImage: "url('" + props.profile + "')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
    }

    /*Sets the font size of the description text to fill most of its container.
    The formula for calculating this is dependent on text length, and found using exponential regression.
    */
    let descriptionLength = 100;

    let mentorStyle = {
        fontSize: Math.round(22.8669 * Math.pow(0.9988, descriptionLength)) + "px",
    }

    let flipStyle = {};




  return(

        <div className = 'cardDiv'>
            <div style = {flipStyle} className = 'cardDivInner'>
                <div style = {fullStyle} className = 'cardDivFront'>
                <div className = 'courseName'>
                    {props.courseName}
                </div>
                </div>
                <div className = {'cardDivBack'}>
                    <p style = {mentorStyle} className = {'courseDescription'}> 
                        {props.courseDescription}
                    </p>
                </div>
            </div>
            </div>
    )
}

export default CourseCard;