import React from "react";
import listItem from "./ListItem.module.css";
import cn from "classnames";

const ListItem = ({ item, id, onClick, className }) => {
  return (
    <li
      className={cn(listItem.item, {
        [listItem.company]: className === "company",
        [listItem.street]: className === "street",
        [listItem.house]: className === "house",
      })}
      onClick={() => {
        onClick(id);
      }}
    >
      {item}
    </li>
  );
};

export default ListItem;
