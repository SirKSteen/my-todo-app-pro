import React, { useState, useEffect } from "react";
import "./DatenTime.css";

export const DateAndTime = () => {
  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setCurrTime(new Date());
  };

  return (
    <React.Fragment>
      <div className={"dateAndTimeWrapper"}>
        <div className={"timeContainer"}>
          <p className={"timeDetails"}>Time: {currTime.toLocaleTimeString()}</p>
        </div>

        <div className={"dateContainer"}>
          <p className={"dateDetails"}>Date: {currTime.toLocaleDateString()}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
