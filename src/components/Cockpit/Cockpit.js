import React from "react";
import Radium from "radium";

const cockpit = props => {
  const style = {
    backgroundColor: props.showPersons ? "red" : "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: props.showPersons ? "gold" : "lightgreen",
      color: "black"
    }
  };

  const classes = [];
  if (props.persons <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }
  return (
    <div>
      <h1>Hi, I'm a React App </h1>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}> working</p>
      <button style={style} onClick={props.togglePersons}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Radium(cockpit);
