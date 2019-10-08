import React from "react";
// import {Numbers} from "../NumberButtons/Numbers"
// import {numbers} from "../../../data"

 const NumberButton = (props) => {
  console.log(props);
  return (
    <button className = "numberButton">
      
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton;