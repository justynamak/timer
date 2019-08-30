import React from "react";

const Clean = ({ click, name, active }) => (
  <button
    type="button"
    className={
      active.includes(name)
        ? "btn btn-outline-light btn-lg active"
        : "btn btn-outline-light btn-lg"
    }
    onClick={click}
  >
    Clean
  </button>
);

export default Clean;
