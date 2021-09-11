import {useEffect, useState, useRef} from 'react';
import '../assets/cards.css';


function CourseCard(props) {

    const [shouldFlip, setFlip] = useState(false);

    const containerRef = useRef();

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setFlip(entry.isIntersecting)
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1
    }

    function downHandler({ key }) {
        if (key === "ArrowUp" || key == "ArrowDown") {
          setFlip(!shouldFlip);
        } else if (key === "ArrowRight") {
            props.nextCard();
        } else if (key == "ArrowLeft") {
            props.lastCard();
        }
      }

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener("keydown", downHandler);
        };
      }, [shouldFlip]); 

    let flipStyle;


    if(shouldFlip) {
        flipStyle = {
            transform: 'rotateX(180deg)', /* part of flipping animation */
        }
    } else {
        flipStyle = {
            transform: 'rotateX(0deg)', /* part of flipping animation */
        }
    }

  return(

        <div className = 'cardDiv'>
            <div style = {flipStyle} className = 'cardDivInner'>
                <div className = 'cardDivFront'>
                    <div className = 'courseName'>
                        {props.courseName}
                    </div>
                </div>
                <div className = 'cardDivBack'>
                    <p className = 'courseDescription'> 
                        {props.courseDescription}
                    </p>
                </div>
            </div>
            </div>
    )
}

export default CourseCard;