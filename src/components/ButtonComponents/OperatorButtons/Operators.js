import React, {useState} from "react";
import "../../components.css";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file
import {operators} from "../../../data";

export default function Operators() {
  // STEP 2 - add the imported data to state
  const [operatorButton] = useState(operators);
    
  return (
    <div className = "operator">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorButton.map((operator, index) =>
         <OperatorButton key={index} operator={operator} />
       )
      }
    </div>
  );
};
