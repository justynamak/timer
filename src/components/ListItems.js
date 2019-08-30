import React from "react";
import Item from "./Item";

const ListItems = ({ list }) => {
  const items = list.map(item => (
    <Item
      key={item.id}
      miliseconds={item.miliseconds}
      seconds={item.seconds}
      minutes={item.minutes}
    />
  ));
  return <ul className="text-center text-light h3">{items}</ul>;
};

export default ListItems;
