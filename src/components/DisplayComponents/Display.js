import React, {useState} from "react";

const Display = () => {
  const[numDisplay] = useState(0);
  return <div className="display">{numDisplay}</div>;
};

export default Display;