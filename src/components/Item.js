import React from "react";

const Item = ({ seconds, miliseconds, minutes }) => (
  <li>
    {minutes < 10 && 0}
    {minutes}:{seconds < 10 && 0}
    {seconds}:{miliseconds < 10 && 0}
    {miliseconds}
  </li>
);

export default Item;
