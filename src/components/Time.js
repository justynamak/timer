import React from "react";

const Time = ({ miliseconds, seconds, minutes }) => {
  return (
    <h1 className="display-1 text-light">
      <strong>
        {minutes < 10 && 0}
        {minutes}:{seconds < 10 && 0}
        {seconds}:{miliseconds < 10 && 0}
        {miliseconds}
      </strong>
    </h1>
  );
};

export default Time;
