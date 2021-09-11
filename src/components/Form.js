import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Select from "react-select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "50px",
    width: "50vw",
    height: "500px",
    // borderStyle: "solid",
    borderColor: "black",
    borderRadius: "50px",
    backgroundColor: "white",
  },
  title: {
    padding: "20px",
  },
  label: {
    textAlign: "center",
    marginBottom: "5px",
  },
  human: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "50px",
    color: "#4c5391",
  },
  heart: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    fontSize: "50px",
    color: "#F49493",
  },
  course: {
    marginTop: theme.spacing(1),
    fontSize: "50px",
    color: "#4c5391",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    borderRadius: "50px",
    background: "#4C5391",
    "&:hover": {
      background: "#F49493",
    },
  },
  field: {
    marginTop: theme.spacing(5),
  },
}));

const interestList = [
  { value: "psychology", label: "Psychology" },
  { value: "westernculture", label: "Western Culture" },
  { value: "easternculture", label: "Eastern Culture" },
];

const majorList = [
  { value: "computerscience", label: "Computer Science" },
  { value: "math", label: "Math" },
  { value: "english", label: "English" },
];

const Form = (props) => {
  const classes = useStyles();
  const [gpa, setGPA] = useState("");
  const [interests, setInterests] = useState({ selectedOption: null });
  const [majors, setMajors] = useState({ selectedOption: null });

  const handleChangeGPA = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9.]/g, "");
    setGPA(onlyNums);
  };

  return (
    <div className={classes.paper}>
      <FaceIcon className={classes.human} />
      <FavoriteIcon className={classes.heart} />
      <LocalLibraryIcon className={classes.course} />
      <Typography component="h1" variant="h5" className={classes.title}>
        Help us better know you
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.field}>
            <InputLabel className={classes.label}>Majors *</InputLabel>
            <Select
              isMulti
              name="majors"
              options={majorList}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => {
                setMajors(e);
              }}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.field}>
            <InputLabel className={classes.label}>Interests *</InputLabel>
            <Select
              isMulti
              name="interests"
              options={interestList}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(e) => setInterests(e)}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={12} className={classes.field}>
            <InputLabel className={classes.label}>Desired GPA *</InputLabel>
            <TextField
              autoComplete="fname"
              name="gpa"
              variant="outlined"
              required
              fullWidth
              id="filled-basic"
              autoFocuss
              value={gpa}
              onChange={handleChangeGPA}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.nextPage}
        >
          Start Matching
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.lastPage}
        >
          Back
        </Button>
      </form>
    </div>
  );
};

export default Form;
