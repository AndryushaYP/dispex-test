import React from "react";
import listContainer from "./ListContainer.module.css";
import cn from "classnames";

const ListContainer = ({ children, className }) => {
  return (
    <ul
      className={cn(listContainer.list, {
        [listContainer.clients]: className === "clients",
      })}
    >
      {children}
    </ul>
  );
};

export default ListContainer;
