import React from "react";

const SpecialButton = props => {
  
  
  return (
    <div className= "button">
    <button className="special_button">
      {props.specials}
       
      
      
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
    </div>
  );
};

export default SpecialButton;