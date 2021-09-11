import { useEffect, useState, useRef } from "react";
import "../assets/cards.css";
import LoopRoundedIcon from "@material-ui/icons/LoopRounded";
import BarGraph from "./BarGraph";

function CourseCard(props) {
  const [shouldFlip, setFlip] = useState(false);

  const containerRef = useRef();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setFlip(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

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

  if (shouldFlip) {
    flipStyle = {
      transform: "rotateX(180deg)" /* part of flipping animation */,
    };
  } else {
    flipStyle = {
      transform: "rotateX(0deg)" /* part of flipping animation */,
    };
  }

  let courseData = props.courseData;
  let name = courseData["Course Name"];
  let title = courseData["Subject"] + "" + courseData["Number"];
  let credits = courseData["Course Credit Hours"];
  let averageGPA = courseData["Course Average GPA"];
  averageGPA = Math.round(parseFloat(averageGPA) * 100) / 100;
  let teachers = courseData["Teachers"];
  let description = courseData["Course Description"];
  let degreeAttributes = courseData["Degree Attributes"];

  let regularIconStyle = {
    fontSize: "35px",
    position: "fixed",
    bottom: "5",
    right: "5",
  };

  let data = [];
  let list = [];


  for (var key of Object.keys(courseData)) {

    if (key.length <= 2) {
        list.push({
            x: key,
            y: parseInt(courseData[key])
        })
    }

  }


list.sort(function(a, b) {

    let scores = {"A+": 10, "A": 9, "A-": 8, "B+": 7, "B": 6, "B-": 5, "C+": 4, "C": 3, "C-": 2, "D+": 1, "D": 0, "D-": -1, "F": -2}
    let aScore = -10;
    let bScore = -10;

    if (a.x in scores) {
        aScore = scores[a.x];
    }

    if (b.x in scores) {
        bScore = scores[b.x];
    }

    return bScore - aScore;
});

  
let x = [];
let y = [];

for (var i = 0; i<list.length; i++) {
    x.push(list[i].x);
    y.push(parseInt(list[i].y));
}


  //Sort x and y based on x

  let names = [
    "Kathy",
    "Adam",
    "Joy",
    "Lewis",
    "Johnathon",
    "Ray",
    "Amanda",
    "Liam",
    "Noah",
    "Lucas",
    "Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "William",
    "James",
    "Benjamin",
    "Lucas",
    "Henry",
    "Alexander",
    "Mason",
    "Michael",
    "Ethan",
    "Daniel",
    "Jacob",
    "Logan",
    "Jackson",
    "Levi",
    "Sebastian",
    "Mateo",
    "Jack",
    "Owen",
    "Theodore",
    "Aiden",
    "Samuel",
    "Joseph",
    "John",
    "David",
    "Wyatt",
    "Matthew",
    "Luke",
    "Asher",
    "Carter",
    "Julian",
    "Grayson",
    "Leo",
    "Olivia",
    "Emma",
    "Ava",
    "Charlotte",
    "Sophia",
    "Amelia",
    "Isabella",
    "Mia",
    "Evelyn",
    "Harper",
    "Camila",
    "Gianna",
    "Abigail",
    "Luna",
    "Ella",
    "Elizabeth",
    "Sofia",
    "Emily",
    "Avery",
    "Mila",
    "Scarlett",
    "Eleanor",
    "Madison",
    "Layla",
    "Penelope",
    "Aria",
    "Chloe",
    "Grace",
    "Ellie",
    "Nora",
  ];

  let phrases = [
    "⭐⭐⭐⭐ Defintely recommend this class",
    "⭐⭐ Ok class, takes a lot of time",
    "⭐ Terrible professor, DO NOT TAKE!",
    "⭐⭐⭐⭐⭐ No finals, no tests, easy A",
    "⭐⭐⭐⭐ Fun class, but it takes some effort",
    "⭐⭐⭐⭐ Had a lot of fun in this class",
    "⭐⭐⭐⭐⭐ Loved the professor!!!",
    "⭐⭐⭐ Class was alright!",
    "⭐⭐⭐ Decent course, but lot of reading",
    "⭐⭐⭐⭐⭐ Absolutely loved the class!",
  ];

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomName() {
    return names[randomInteger(0, names.length - 1)];
  }

  function getRandomPhrase() {
    return phrases[randomInteger(0, phrases.length - 1)];
  }

  return (
    <div className="cardDiv">
      <div style={flipStyle} className="cardDivInner">
        <div className="cardDivFront">
          <div className="courseName">{title + " - " + name}</div>
          <p className="courseDescription">{description}</p>

          <div className="courseDataFlex">
            <p>
              <b className="boldStyle">Credits💳</b>
              <br />
              {credits}
            </p>
            <p>
              <b className="boldStyle"> Average GPA💯</b> <br />
              {averageGPA}
            </p>
            <p>
              <b className="boldStyle">Requirement Fufilled✅</b> <br />
              {degreeAttributes}
            </p>
            <p>
              <b className="boldStyle">Professor🧑‍🏫</b> <br />
              {teachers}
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <i>Flip for more info!</i>


          {!shouldFlip ? (
            <LoopRoundedIcon
              onClick={() => setFlip(!shouldFlip)}
              style={regularIconStyle}
            />
          ) : null}
        </div>

        <div className="cardDivBack">
          <br></br>
          <BarGraph x={x} y={y} className={title} />
          <br />
          <b className="boldStyle">Student Reviews</b>

          <p>{getRandomPhrase() + " - " + getRandomName()}</p>

          <p>{getRandomPhrase() + " - " + getRandomName()}</p>

          <p>{getRandomPhrase() + " - " + getRandomName()}</p>


          {shouldFlip ? (
            <LoopRoundedIcon
              onClick={() => setFlip(!shouldFlip)}
              style={regularIconStyle}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
