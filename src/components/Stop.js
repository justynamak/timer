import React from "react";

const Stop = ({ click, name, active }) => (
  <button
    type="button"
    className={
      active.includes(name)
        ? "btn btn-outline-light btn-lg mr-2 active"
        : "btn btn-outline-light btn-lg mr-2"
    }
    onClick={click}
  >
    Stop
  </button>
);

export default Stop;
