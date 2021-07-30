import React from "react";
import listContainer from "./ListContainer.module.css";

const ListContainer = ({ children }) => {
  return <ul className={listContainer.list}>{children}</ul>;
};

export default ListContainer;
