import React from "react";




const OperatorButton = props => {
  
  return (
    <button className="operator_button">
      <span role="img" aria-label="operator">
        {props.operator.value}
      </span>
      
     
    </button>
  );
};

export default OperatorButton;