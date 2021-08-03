import React from "react";
import listItem from "./ListItem.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const ListItem = ({ text, id, onClick, className, item, path }) => {
  return (
    <Link
      to={path}
      className={cn(listItem.item, {
        [listItem.company]: className === "company",
        [listItem.street]: className === "street",
        [listItem.house]: className === "house",
        [listItem.client]: className === "client",
      })}
      onClick={(e) => {
        path === "/apartment" ? onClick(item) : onClick(id);
      }}
    >
      {text}
    </Link>
  );
};

export default ListItem;
