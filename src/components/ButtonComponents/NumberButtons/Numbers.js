import React, {useState} from "react";
import {numbers} from "../../../data";
import NumberButton from "./NumberButton";
import "../../components.css";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export default function Numbers () {
  // STEP 2 - add the imported data to state
  const [numberButton] = useState(numbers);
  return (
    <div className="button_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberButton.map((number, index) =>(
       <NumberButton key = {index} number = {number}/>
       ))}       
    </div>
  );
}
