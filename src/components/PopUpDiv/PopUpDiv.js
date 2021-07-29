import React from "react";
import "./PopUpDiv.css";

function PopUpDiv(props) {
  let color = props.bgColor;

  return (
    <React.Fragment>
      <div className={"popUpWrapper"} style={{ backgroundColor: `${color}` }}>
        <h1>{props.name}</h1>
      </div>
    </React.Fragment>
  );
}

export default PopUpDiv;
